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

/**
 * Retrieves a subset of learning path items for a given learning path ID.
 *
 * @param {string} learningPathId - The ID of the learning path to retrieve items for.
 * @param {number} skip - The number of documents to skip.
 * @param {number} limit - The maximum number of documents to return.
 * @return {Promise<Array>} A promise that resolves to an array of learning path items.
 */
async function getUserLearningPathItems(learningPathId, skip, limit) {
  return await LearningPathItem
    .find({ learningPathId })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });
}

module.exports = {
  validateLearningPathItem,
  createLearningPathItem,
  getUserLearningPathItems,
};