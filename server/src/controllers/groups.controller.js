const {
  getGroupById,
  validateGroup,
  createGroup,
  deleteGroup,
  updateGroup,
} = require('../models/groups/groups.model');
const {
  setCreatorAdmin,
  getGroupsByUserIdWithRole,
  deleteGroupsById,
  createInvitationToken,
  sendInvitationEmail,
  findExistingUserInGroup,
  getUserInfoFromToken,
  addUserToGroup,
  deleteUserFromGroup,
  editGroupRole,
} = require('../models/relationships/userGroupRoleRelationships/userGroupRoleRelationships.model');
const { findExistingUserByEmail } = require('../models/users/users.model');

const { getPagination, getPaginatedDate } = require('../helpers/pagination');

const httpStatuses = require('../constants/httpStatuses');
const { groupControllerMessages, smthWentWrong, userControllerMessages, } = require('../constants/controllerMessages');

async function httpCreateGroup(req, res) {
  try {
    const group = req.body;
    const userId = req.user.id;

    const sendGroup = {
      ...group,
      userId,
    };

    const error = validateGroup(sendGroup);

    if (error) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: error.details[0].message,
        statusCode: httpStatuses.badRequest,
      });
    }

    const createdGroup = await createGroup(sendGroup);

    await setCreatorAdmin(userId, createdGroup._id);

    return res.status(httpStatuses.created).json({
      success: true,
      data: createdGroup,
      message: groupControllerMessages.groupCreated,
      statusCode: httpStatuses.created,
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function httpGetGroups(req, res) {
  try {
    const userId = req.user.id;
    const { page, limit: perPage } = req.query;
    const { skip, limit } = getPagination(req.query);

    if (!userId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: userControllerMessages.userNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const groups = await getGroupsByUserIdWithRole(userId, skip, limit);

    const paginatedGroups = getPaginatedDate(groups, page, perPage);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: paginatedGroups,
      message: groupControllerMessages.groupsReceived,
      statusCode: httpStatuses.ok,
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function httpGetGroup(req, res) {
  try {
    const { groupId } = req.params;

    if (!groupId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.groupNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const group = await getGroupById(groupId);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: group,
      message: groupControllerMessages.groupReceived,
      statusCode: httpStatuses.ok,
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function httpDeleteGroup(req, res) {
  try {
    const { groupId } = req.params;

    if (!groupId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.groupNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const deletedGroupId = await deleteGroup(groupId);
    await deleteGroupsById(deletedGroupId);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: {
        deletedGroupId
      },
      message: groupControllerMessages.groupDeleted,
      statusCode: httpStatuses.ok,
    })
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function httpUpdateGroup(req, res) {
  try {
    const groupData = req.body;
    const { groupId } = req.params;

    if (!groupId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.groupNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const updatedGroup = await updateGroup(groupId, groupData);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: updatedGroup,
      message: groupControllerMessages.groupUpdated,
      statusCode: httpStatuses.ok,
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function httpInviteUserToGroup(req, res) {
  try {
    const { groupId } = req.params;

    if (!groupId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.groupNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const group = await getGroupById(groupId);

    if (!group) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.groupNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const { email, roleId } = req.body;

    const user = await findExistingUserByEmail(email);
    const userId = user._id;

    const invitationToken = createInvitationToken(userId, roleId);
    const sentEmail = sendInvitationEmail(email, groupId, invitationToken);

    if (!sentEmail) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: userControllerMessages.userNotFound, // TODO change the message
        statusCode: httpStatuses.badRequest,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: {
        email: sentEmail,
      },
      message: groupControllerMessages.userInvited(email),
      statusCode: httpStatuses.ok,
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function httpAddUserToGroup(req, res) {
  try {
    const { groupId, invitationToken } = req.params;

    if (!groupId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.groupNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const user = await getUserInfoFromToken(invitationToken);

    if (!user) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.groupNotFound, // TODO change the message
        statusCode: httpStatuses.badRequest,
      });
    }

    const { userId, roleId } = user;

    const userInGroup = await findExistingUserInGroup(userId, groupId);

    if (userInGroup) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.userAlreadyInGroup,
        statusCode: httpStatuses.badRequest,
      });
    }

    const userGroupData = await addUserToGroup(groupId, userId, roleId);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: userGroupData,
      message: groupControllerMessages.userAddedToGroup(userGroupData.userId.email), // TODO maybe change by name
      statusCode: httpStatuses.ok,
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function httpDeleteUserFromGroup(req, res) {
  try {
    const { groupId, userId } = req.params;

    if (!groupId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.groupNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    if (!userId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.userNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const existingUserInGroup = await findExistingUserInGroup(userId, groupId);

    if (!existingUserInGroup) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.userNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const deletedUser = await deleteUserFromGroup(groupId, userId);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: deletedUser,
      message: groupControllerMessages.userDeletedFromGroup,
      statusCode: httpStatuses.ok,
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function httpEditUserGroupRole(req, res) {
  try {
    const { role: roleId } = req.body;

    if (!roleId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.roleNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const { groupId, userId } = req.params;

    if (!groupId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.groupNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    if (!userId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: groupControllerMessages.userNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const editedGroup = await editGroupRole(groupId, userId, roleId);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: editedGroup,
      message: groupControllerMessages.roleEdited,
      statusCode: httpStatuses.ok,
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

module.exports = {
  httpCreateGroup,
  httpGetGroup,
  httpGetGroups,
  httpDeleteGroup,
  httpUpdateGroup,
  httpInviteUserToGroup,
  httpAddUserToGroup,
  httpDeleteUserFromGroup,
  httpEditUserGroupRole,
};