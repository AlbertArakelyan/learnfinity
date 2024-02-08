const {
  validateLearningPath,
  createLearningPath,
  getUserLearningPaths,
  getUserLearningPath,
  getPublicLearningPaths,
  getSharedLearningPaths,
} = require('../models/learningPaths/learningPaths.model');

const { getPagination, getPaginatedDate } = require('../helpers/pagination');

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

    const { page, limit: perPage } = req.query;
    const { skip, limit } = getPagination(req.query);

    const learningPaths = await getUserLearningPaths(userId, skip, limit);
    const paginatedLearningPaths = getPaginatedDate(learningPaths, page, perPage);

    if (!paginatedLearningPaths.data?.length) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: learningPathControllerMessages.learningPathsNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: paginatedLearningPaths,
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

async function httpGetUserLearningPath(req, res) {
  try {
    const { learningPathId } = req.params;

    if (!learningPathId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: learningPathControllerMessages.learningPathNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const userId = req.user.id;

    if (!userId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: learningPathControllerMessages.userNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const learningPath = await getUserLearningPath(userId, learningPathId);

    if (!learningPath) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: learningPathControllerMessages.learningPathNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: learningPath,
      message: learningPathControllerMessages.learningPathReceived,
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

async function httpGetPublicLearningPaths(req, res) {
  try {
    const { page, limit: perPage } = req.query;
    const { skip, limit } = getPagination(req.query);

    const learningPaths = await getPublicLearningPaths(skip, limit);
    const paginatedLearningPaths = getPaginatedDate(learningPaths, page, perPage);

    if (!paginatedLearningPaths.data?.length) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: learningPathControllerMessages.learningPathsNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: paginatedLearningPaths,
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

async function httpGetSharedLearningPaths(req, res) {
  try {
    const userId = req.user.id;
    const { page, limit: perPage } = req.query;
    const { skip, limit } = getPagination(req.query);

    const learningPaths = await getSharedLearningPaths(userId, skip, limit);
    const paginatedLearningPaths = getPaginatedDate(learningPaths, page, perPage);

    if (!paginatedLearningPaths.data?.length) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: learningPathControllerMessages.learningPathsNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: paginatedLearningPaths,
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
  httpGetUserLearningPath,
  httpGetPublicLearningPaths,
  httpGetSharedLearningPaths,
};