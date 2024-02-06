const {
  validateLearningPath,
  createLearningPath,
  getUserLearningPaths,
} = require('../models/learningPaths/learningPaths.model');

const httpStatuses = require('../constants/httpStatuses');
const { learningPathControllerMessages, smthWentWrong } = require('../constants/controllerMessages');

async function httpCreateLearningPath(req, res) {
  try {
    const learningPath = req.body;

    const userId = req.user.id;

    const error = validateLearningPath({...learningPath, userId});

    if (error) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: error.details[0].message,
        statusCode: httpStatuses.badRequest,
      });
    }

    const { isPrivate, isCreatedInGroup } = learningPath;

    if (isCreatedInGroup && !isPrivate) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: learningPathControllerMessages.learningPathsInGroupMustBePrivate,
        statusCode: httpStatuses.badRequest,
      });
    }

    const learningPathData = {
      ...learningPath,
      userId,
    };

    const createdLearningPath = await createLearningPath(learningPathData);

    return res.status(httpStatuses.created).json({
      success: true,
      data: createdLearningPath,
      message: learningPathControllerMessages.learningPathCreated,
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

async function httpGetUserLearningPaths(req, res) {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: learningPathControllerMessages.userNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const learningPaths = await getUserLearningPaths(userId);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: learningPaths,
      message: learningPathControllerMessages.learningPathsReceived,
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
  httpCreateLearningPath,
  httpGetUserLearningPaths,
};