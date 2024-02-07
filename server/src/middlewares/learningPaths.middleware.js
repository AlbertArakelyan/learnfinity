const { getUserLearningPath } = require('../models/learningPaths/learningPaths.model');

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

module.exports = {
  learningPathAccessMiddleware,
};