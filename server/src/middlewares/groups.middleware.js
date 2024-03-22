const jwt = require('jsonwebtoken');

require('dotenv').config();

const { getGroupByUserIdAndGroupId } = require('../models/relationships/userGroupRoleRelationships/userGroupRoleRelationships.model');

const httpStatuses = require('../constants/httpStatuses');
const { smthWentWrong, groupControllerMessages } = require('../constants/controllerMessages');
const { getUserRole } = require('../models/roles/roles.model');

async function groupAccessMiddleware(req, res, next) {
  try {
    const { id: userId } = req.user;
    const { groupId } = req.params;

    const group = await getGroupByUserIdAndGroupId(userId, groupId);

    if (!group) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: groupControllerMessages.notFoundOrDontHavePermission,
        statusCode: httpStatuses.notFound,
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function canEditOrDeleteGroupMiddleware(req, res, next) {
  try {
    const { id: userId } = req.user;
    const { groupId } = req.params;

    const group = await getGroupByUserIdAndGroupId(userId, groupId);

    // Instead can be used group access middleware in routes
    if (!group) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: groupControllerMessages.youAreNotInThisGroup,
        statusCode: httpStatuses.notFound,
      });
    }

    await group.populate('roleId');

    const userRole = await getUserRole();

    if (group.roleId.power === userRole.power) {
      return res.status(httpStatuses.forbidden).json({
        success: false,
        message: groupControllerMessages.youDontHavePermission,
        statusCode: httpStatuses.forbidden,
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

module.exports = {
  groupAccessMiddleware,
  canEditOrDeleteGroupMiddleware,
};