const {
  validateGroup,
  createGroup,
} = require('../models/groups/groups.model');
const {
  setCreatorAdmin,
  getGroupsByUserIdWithRole,
} = require('../models/relationships/userGroupRoleRelationships/userGroupRoleRelationships.model');

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

module.exports = {
  httpCreateGroup,
  httpGetGroups,
};