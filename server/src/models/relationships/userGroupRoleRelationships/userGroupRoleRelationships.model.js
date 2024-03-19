const jwt = require('jsonwebtoken');

const UserGroupRoleRelationship = require('./userGroupRoleRelationships.mongo');
const Role = require('../../roles/roles.mongo');

const transporter = require('../../../utils/transporter');

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

async function getGroupByUserIdAndGroupId(userId, groupId) {
  return await UserGroupRoleRelationship.findOne({ userId, groupId });
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

/**
 * Generates an invitation token for a user with the specified user ID and role ID.
 *
 * @param {string} userId - The ID of the user.
 * @param {string} roleId - The ID of the role.
 * @return {string} The generated invitation token.
 */
function createInvitationToken(userId, roleId) {
  return jwt.sign({ userId, roleId }, process.env.JWT_SECRET);
}

/**
 * Sends an invitation email to a given email address with a link to join a group.
 *
 * @param {string} email - The email address to send the invitation to.
 * @param {string} groupId - The ID of the group the user is invited to join.
 * @param {string} token - The token used to authenticate the invitation.
 * @return {string} The email address that was sent the invitation.
 */
function sendInvitationEmail(email, groupId, token) {
  const invitationUrl = `${process.env.NODEMAILER_WEBSITE_URL}${groupId}/${token}`;

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: 'Invitation to join a group',
    html: `<p>Click this link to join the group: <a style="color: cornflowerblue; text-decoration: underline" href="${invitationUrl}">${invitationUrl}</a></p>`, // TODO add group name
  };

  let sendEmailError;

  transporter.sendMail(mailOptions, (error, info) => {
    // TODO improve error catching as it remains inside of this block
    if (error) {
      sendEmailError = error;
      return;
    }

    console.log(`Email sent: ${info.response}`);
  });

  // TODO improve error catching as here sendEmailError still is not defined
  if (sendEmailError) {
    console.log('if/sendEmailError', sendEmailError);
    throw new Error(sendEmailError);
  }

  return email;
}

/**
 * Finds an existing user in a group.
 *
 * @param {string} userId - The ID of the user.
 * @param {string} groupId - The ID of the group.
 * @return {UserGroupRoleRelationship} The relationship between the user and the group.
 */
function findExistingUserInGroup(userId, groupId) {
  return UserGroupRoleRelationship.findOne({ userId, groupId });
}

/**
 * Retrieves user information from a given JWT token.
 *
 * @param {string} token - The JWT token containing user information.
 * @return {object} An object containing the user information extracted from the token.
 */
function getUserInfoFromToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

/**
 * Adds a user to a group with a specific role.
 *
 * @param {string} groupId - The ID of the group.
 * @param {string} userId - The ID of the user.
 * @param {string} roleId - The ID of the role.
 * @return {Promise<UserGroupRoleRelationship>} The created user-group-role relationship.
 */
async function addUserToGroup(groupId, userId, roleId) {
  const userGroupRoleRelationship = new UserGroupRoleRelationship({
    userId,
    groupId,
    roleId,
  });

  await userGroupRoleRelationship.save();

  // TODO delete password
  await userGroupRoleRelationship.populate('userId');

  return userGroupRoleRelationship;
}

/**
 * Deletes a user from a group.
 *
 * @param {string} groupId - The ID of the group.
 * @param {string} userId - The ID of the user.
 * @return {Promise} A promise that resolves when the user is successfully deleted from the group.
 */
async function deleteUserFromGroup(groupId, userId) {
  // TODO call also when just a user or a group is deleted
  return await UserGroupRoleRelationship.deleteOne({ userId, groupId });
}

async function editGroupRole(groupId, userId, roleId) {
  const userGroupRoleRelationship = await getGroupByUserIdAndGroupId(userId, groupId);

  userGroupRoleRelationship.roleId = roleId;

  await userGroupRoleRelationship.save();

  await userGroupRoleRelationship.populate('roleId');

  return userGroupRoleRelationship;
}

module.exports = {
  setCreatorAdmin,
  getGroupsByUserIdWithRole,
  getGroupByUserIdAndGroupId,
  deleteGroupsById,
  createInvitationToken,
  sendInvitationEmail,
  findExistingUserInGroup,
  getUserInfoFromToken,
  addUserToGroup,
  deleteUserFromGroup,
  editGroupRole,
};