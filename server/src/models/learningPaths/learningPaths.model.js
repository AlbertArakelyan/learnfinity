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

async function getUserLearningPaths(userId) {
  return await LearningPath.find({userId, isCreatedInGroup: false});
}

module.exports = {
  validateLearningPath,
  createLearningPath,
  getUserLearningPaths,
};