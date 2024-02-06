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
async function getUserLearningPaths(userId) {
  return await LearningPath.find({ userId, isCreatedInGroup: false });
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
  const learningPath = LearningPath.findOne({ _id: learningPathId, isCreatedInGroup: false });
  if (learningPath.isPrivate) {
    return await learningPath.userId === userId ? learningPath : null;
    // TODO also add a separate condition for shared userIDs
  }

  return learningPath;
}

module.exports = {
  validateLearningPath,
  createLearningPath,
  getUserLearningPaths,
  getUserLearningPath,
};