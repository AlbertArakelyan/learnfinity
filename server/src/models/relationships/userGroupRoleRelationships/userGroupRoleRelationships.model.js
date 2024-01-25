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
    isActive: true,
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
  return await UserGroupRoleRelationship.findOne({userId, groupId});
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

module.exports = {
  setCreatorAdmin,
  getGroupsByUserIdWithRole,
  getGroupByUserIdAndGroupId,
  deleteGroupsById,
  createInvitationToken,
  sendInvitationEmail,
};