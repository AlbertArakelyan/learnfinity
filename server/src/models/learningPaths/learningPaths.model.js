const mongoose = require('mongoose');

const LearningPath = require('./learningPaths.mongo');

const { learningPathSchema } = require('../../utils/schemas/learningPaths.schema');

/**
 * Validates a learning path.
 *
 * @param {object} learningPath - The learning path to be validated.
 * @return {object} The validation error, if any.
 */
function validateLearningPath(learningPath) {
  const { error } = learningPathSchema.validate(learningPath);

  return error;
}

/**
 * Creates a new learning path.
 *
 * @param {object} learningPath - The learning path to create.
 * @return {Promise<object>} The created learning path.
 */
async function createLearningPath(learningPath) {
  const createdLearningPath = new LearningPath(learningPath);

  await createdLearningPath.save();
  // TODO maybe populate userId for displaying avatars or write a separate API for showing users group is shared with (name, avatar, id)

  return createdLearningPath;
}


/**
 * Retrieves the learning paths associated with a specific user.
 *
 * @param {string} userId - The ID of the user.
 * @return {Promise<Array>} An array of learning paths associated with the user.
 */
async function getUserLearningPaths(userId, skip, limit) {
  return await LearningPath
    .find({ userId, isCreatedInGroup: false })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });
}

/**
 * Retrieves the learning path for a specific user.
 *
 * @param {string} userId - The ID of the user.
 * @param {string} learningPathId - The ID of the learning path.
 * @return {Object|null} The learning path object if it is not private and the user has access,
 * otherwise null.
 */
async function getUserLearningPath(userId, learningPathId) {
  const learningPath = await LearningPath.findOne({ _id: learningPathId, isCreatedInGroup: false });

  if (learningPath?.isPrivate) {
    const isShared = learningPath.sharedUserIds.includes(userId);
    return await (learningPath.userId.equals(new mongoose.Types.ObjectId(userId)) || isShared) ? learningPath : null;
  }

  return learningPath;
}

/**
 * Retrieves public learning paths from the database.
 *
 * @param {number} skip - The number of documents to skip.
 * @param {number} limit - The maximum number of documents to return.
 * @return {Promise<Array>} An array of public learning paths.
 */
async function getPublicLearningPaths(skip, limit) {
  return await LearningPath
    .find({ isCreatedInGroup: false, isPrivate: false })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });
}

/**
 * Retrieves the shared learning paths for a given user.
 *
 * @param {string} userId - The ID of the user.
 * @param {number} skip - The number of documents to skip.
 * @param {number} limit - The maximum number of documents to return.
 * @return {Promise<Array>} - A promise that resolves to an array of shared learning paths.
 */
async function getSharedLearningPaths(userId, skip, limit) {
  return await LearningPath
    .find({ sharedUserIds: { $in: [userId] } })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });
}

module.exports = {
  validateLearningPath,
  createLearningPath,
  getUserLearningPaths,
  getUserLearningPath,
  getPublicLearningPaths,
  getSharedLearningPaths,
};