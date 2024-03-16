const { getUserLearningPath, getUsersCreatedLearningPath } = require('../models/learningPaths/learningPaths.model');
const { getGroupByUserIdAndGroupId } = require('../models/relationships/userGroupRoleRelationships/userGroupRoleRelationships.model');

const httpStatuses = require('../constants/httpStatuses');
const { smthWentWrong, learningPathControllerMessages } = require('../constants/controllerMessages');

async function learningPathAccessMiddleware(req, res, next) {
  try {
    const { id: userId } = req.user;
    const { learningPathId } = req.params;
    console.log(userId, learningPathId);

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

    // TODO add check if user is admin or manager in group
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

module.exports = {
  learningPathAccessMiddleware,
  canEditOrDeleteLearningPathMiddleware,
};