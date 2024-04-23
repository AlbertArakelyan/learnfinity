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
async function getLearningPathItems(learningPathId) {
  return await LearningPathItem
    .find({ learningPathId })
    .sort({ createdAt: -1 });
}

/**
 * Deletes a user learning path item by its ID.
 *
 * @param {string} learningPathItemId - The ID of the learning path item to delete
 * @return {Promise<object>} The deleted learning path item
 */
async function deleteLearningPathItem(learningPathItemId) {
  return await LearningPathItem.findByIdAndDelete(learningPathItemId);
}

/**
 * Edits a user's learning path item.
 *
 * @param {string} learningPathItemId - The ID of the learning path item to edit.
 * @param {Object} updatedLearningPathItem - The updated learning path item object.
 * @return {Promise<Object>} The updated learning path item object.
 */
async function editLearningPathItem(learningPathItemId, updatedLearningPathItem) {
  return await LearningPathItem.findByIdAndUpdate(learningPathItemId, updatedLearningPathItem, { new: true });
}

module.exports = {
  validateLearningPathItem,
  createLearningPathItem,
  getLearningPathItems,
  deleteLearningPathItem,
  editLearningPathItem,
};