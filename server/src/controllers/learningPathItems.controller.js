const {
  validateLearningPathItem,
  createLearningPathItem,
  getUserLearningPathItems,
} = require('../models/learningPathItems/learningPathItems.model');

const { getPagination, getPaginatedDate } = require('../helpers/pagination');

const httpStatuses = require('../constants/httpStatuses');
const { learningPathItemControllerMessages, smthWentWrong } = require('../constants/controllerMessages');

async function httpCreateUserLearningPathItem(req, res) {
  try {
    const learningPathItem = req.body;
    const { learningPathId } = req.params;
    const userId = req.user.id;

    if (!userId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: smthWentWrong,
        statusCode: httpStatuses.badRequest,
      });
    }

    const learningPathItemData = {
      ...learningPathItem,
      learningPathId,
      userId,
    };

    const error = validateLearningPathItem(learningPathItemData);

    if (error) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: error.details[0].message,
        statusCode: httpStatuses.badRequest,
      });
    }

    const createdLearningPathItem = await createLearningPathItem(learningPathItemData);

    return res.status(httpStatuses.created).json({
      success: true,
      data: createdLearningPathItem,
      message: learningPathItemControllerMessages.learningPathItemCreated,
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

async function httpGetUserLearningPathItems(req, res) {
  try {
    const { learningPathId } = req.params;
    const userId = req.user.id;

    if (!userId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: smthWentWrong,
        statusCode: httpStatuses.badRequest,
      });
    }

    const { page, limit: perPage } = req.query;
    const { skip, limit } = getPagination(req.query);

    const learningPathItems = await getUserLearningPathItems(learningPathId, skip, limit);
    const paginatedLearningPathItems = getPaginatedDate(learningPathItems, page, perPage);

    if (!paginatedLearningPathItems.data?.length) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: learningPathItemControllerMessages.learningPathItemsNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: paginatedLearningPathItems,
      message: learningPathItemControllerMessages.learningPathItemsReceived,
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
  httpCreateUserLearningPathItem,
  httpGetUserLearningPathItems,
};