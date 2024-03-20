const LearningPathItem = require('./learningPathItems.mongo');

const { learningPathItemSchema } = require('../../utils/schemas/learningPathItems.schema');

/**
 * Validates a learning path item.
 *
 * @param {object} learningPathItem - The learning path item to be validated.
 * @return {object} The validation error, if any.
 */
function validateLearningPathItem(learningPathItem) {
  const { error } = learningPathItemSchema.validate(learningPathItem);

  return error;
}

/**
 * Creates a new learning path item based on the provided data.
 *
 * @param {Object} learningPathItem - The data for the new learning path item.
 * @return {Object} The newly created learning path item.
 */
async function createLearningPathItem(learningPathItem) {
  const createdLearningPathItem = new LearningPathItem(learningPathItem);

  await createdLearningPathItem.save();

  return createdLearningPathItem;
}

module.exports = {
  validateLearningPathItem,
  createLearningPathItem,
};