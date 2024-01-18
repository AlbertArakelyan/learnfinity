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

module.exports = {
  setCreatorAdmin,
};