const jwt = require('jsonwebtoken');

require('dotenv').config();

const { getGroupByUserIdAndGroupId } = require('../models/relationships/userGroupRoleRelationships/userGroupRoleRelationships.model');

const httpStatuses = require('../constants/httpStatuses');
const { smthWentWrong, groupControllerMessages } = require('../constants/controllerMessages');

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

module.exports = {
  groupAccessMiddleware,
};