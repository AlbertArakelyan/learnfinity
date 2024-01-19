const UserGroupRoleRelationship = require('./userGroupRoleRelationships.mongo');
const Role = require('../../roles/roles.mongo');

const { rolePowers } = require('../../../constants/roles');

/**
 * Sets the user with the given userId as an admin for the group with the given groupId.
 *
 * @param {string} userId - The ID of the user to set as admin.
 * @param {string} groupId - The ID of the group to set the user as admin for.
 * @return {Promise<void>} - A promise that resolves when the user has been set as admin for the group.
 */
async function setCreatorAdmin(userId, groupId) {
  const adminRole = await Role.findOne({ power: rolePowers.admin });

  // TODO create a schema for this and validate it

  const userGroupRoleRelationship = new UserGroupRoleRelationship({
    userId,
    groupId,
    roleId: adminRole._id,
  });

  await userGroupRoleRelationship.save();
}

/**
 * Retrieves groups associated with a user, filtered by role, with pagination.
 *
 * @param {string} userId - The ID of the user.
 * @param {number} skip - The number of records to skip.
 * @param {number} limit - The maximum number of records to return.
 * @return {Promise<Array>} An array of groups associated with the user.
 */
async function getGroupsByUserIdWithRole(userId, skip, limit) {
  const groups = await UserGroupRoleRelationship.find({ userId })
    .populate('groupId')
    .populate('roleId')
    .skip(skip)
    .limit(limit)
    .sort({ created_at: -1 });

  return groups;
}

/**
 * Deletes groups by their ID.
 *
 * @param {string} groupId - The ID of the group.
 * @return {string} The ID of the deleted group.
 */
async function deleteGroupsById(groupId) {
  await UserGroupRoleRelationship.deleteMany({ groupId });

  return groupId;
}

module.exports = {
  setCreatorAdmin,
  getGroupsByUserIdWithRole,
  deleteGroupsById,
};