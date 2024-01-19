const Group = require('./groups.mongo');

const { groupSchema } = require('../../utils/schemas/groups.schema');

/**
 * Retrieves a group by its ID.
 *
 * @param {string} groupId - The ID of the group to retrieve.
 * @return {Promise<Group>} - A Promise that resolves to the retrieved group.
 */
async function getGroupById(groupId) {
  return await Group.findById(groupId);
}

/**
 * Validates a group object.
 *
 * @param {Object} group - The group object to validate.
 * @param {string} group.name - The name of the group.
 * @param {string} group.description - The description of the group.
 * @param {string} group.userId - The ID of the user who created the group.
 * @return {Object} The error object if validation fails, otherwise undefined.
 */
function validateGroup(group) {
  const { error } = groupSchema.validate(group);

  return error;
}

/**
 * Creates a new group.
 *
 * @param {Object} group - The group object to be created.
 * @param {string} group.name - The name of the group.
 * @param {string} group.description - The description of the group.
 * @param {string} group.userId - The ID of the user who created the group.
 * @return {Promise<Object>} The newly created group object.
 */
async function createGroup(group) {
  const createdGroup = new Group(group);

  await createdGroup.save();

  return createdGroup;
}

/**
 * Deletes a group by its ID.
 *
 * @param {string} groupId - The ID of the group to be deleted.
 * @return {Promise<string>} The ID of the deleted group.
 */
async function deleteGroup(groupId) {
  await Group.findByIdAndDelete(groupId);

  return groupId;
}

/**
 * Updates a group with the given ID.
 *
 * @param {string} groupId - The ID of the group to update.
 * @param {object} group - The updated group object.
 * @param {string} group.name - The name of the group.
 * @param {string} group.group - The group of the group.
 * @return {Promise<object>} - The updated group object.
 */
async function updateGroup(groupId, group) {
  await Group.findByIdAndUpdate(groupId, group);

  return await getGroupById(groupId);
}

module.exports = {
  validateGroup,
  createGroup,
  deleteGroup,
  updateGroup,
};