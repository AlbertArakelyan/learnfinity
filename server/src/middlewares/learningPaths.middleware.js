const { getUserLearningPath, getUsersCreatedLearningPath } = require('../models/learningPaths/learningPaths.model');
const { getGroupByUserIdAndGroupId } = require('../models/relationships/userGroupRoleRelationships/userGroupRoleRelationships.model');
const { getUserRole } = require('../models/roles/roles.model');

const httpStatuses = require('../constants/httpStatuses');
const { smthWentWrong, learningPathControllerMessages } = require('../constants/controllerMessages');

async function learningPathAccessMiddleware(req, res, next) {
  try {
    const { id: userId } = req.user;
    const { learningPathId } = req.params;

    const learningPath = await getUserLearningPath(userId, learningPathId);

    if (!learningPath) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: learningPathControllerMessages.learningPathNotFound,
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

async function canEditOrDeleteLearningPathMiddleware(req, res, next) {
  try {
    const { id: userId } = req.user;
    const { learningPathId } = req.params;

    const userLearningPath = await getUsersCreatedLearningPath(userId, learningPathId);

    if (!userLearningPath) {
      return res.status(httpStatuses.forbidden).json({
        success: false,
        message: learningPathControllerMessages.learningPathNotFound,
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

async function canEditOrDeleteGroupLearningPathMiddleware(req, res, next) {
  // Should get the user by groupId and userId and check if user is admin or manager (by {role: roleId})
  try {
    const { id: userId } = req.user;
    const { groupId } = req.params;

    const group = await getGroupByUserIdAndGroupId(userId, groupId);
    await group.populate('roleId');

    const userRole = await getUserRole();

    if (group.roleId.power === userRole.power) {
      return res.status(httpStatuses.forbidden).json({
        success: false,
        message: learningPathControllerMessages.youDontHavePermission,
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
// TODO add check if user is admin or manager in group (to delete or edit) new middleware

module.exports = {
  learningPathAccessMiddleware,
  canEditOrDeleteLearningPathMiddleware,
  canEditOrDeleteGroupLearningPathMiddleware,
};