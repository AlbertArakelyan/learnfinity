const {
  validateLearningPathItem,
  createLearningPathItem,
  getLearningPathItems,
  deleteLearningPathItem,
  editLearningPathItem,
} = require('../models/learningPathItems/learningPathItems.model');

const { getPagination, getPaginatedDate } = require('../helpers/pagination');

const httpStatuses = require('../constants/httpStatuses');
const { learningPathItemControllerMessages, learningPathControllerMessages, smthWentWrong } = require('../constants/controllerMessages');

async function httpCreateLearningPathItem(req, res) {
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
    
    if (!learningPathId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: learningPathControllerMessages.learningPathNotFound,
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

    const learningPathItems = await getLearningPathItems(learningPathId, skip, limit);
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

async function httpDeleteUserLearningPathItem(req, res) {
  try {
    const { learningPathItemId } = req.params;

    if (!learningPathItemId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: smthWentWrong,
        statusCode: httpStatuses.badRequest,
      });
    }

    const deletedLearningPathItem = await deleteLearningPathItem(learningPathItemId);

    if (!deletedLearningPathItem) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: learningPathItemControllerMessages.learningPathItemNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: {
        id: learningPathItemId,
        isDeleted: true,
      },
      message: learningPathItemControllerMessages.learningPathItemDeleted,
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

async function httpEditLearningPathItem(req, res) {
  try {
    const { learningPathItemId } = req.params;
    const learningPathItemData = req.body;

    // TODO check if it is valid ObjectId (same for all other controllers)
    if (!learningPathItemId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: learningPathItemControllerMessages.learningPathItemNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const updatedLearningPathItem = await editLearningPathItem(learningPathItemId, learningPathItemData);

    if (!updatedLearningPathItem) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: learningPathItemControllerMessages.learningPathItemNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: updatedLearningPathItem,
      message: learningPathItemControllerMessages.learningPathItemUpdated,
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

async function httpGetGroupLearningPathItems(req, res) {
  try {
    const { learningPathId } = req.params;

    if (!learningPathId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: learningPathControllerMessages.learningPathNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const { page, limit: perPage } = req.query;
    const { skip, limit } = getPagination(req.query);

    const learningPathItems = await getLearningPathItems(learningPathId, skip, limit);
    const paginatedLearningPathItems = getPaginatedDate(learningPathItems, page, perPage);

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

async function httpDeleteGroupLearningPathItem(req, res) {
  try {
    const { learningPathItemId } = req.params;

    if (!learningPathItemId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: learningPathItemControllerMessages.learningPathItemNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    const deletedLearningPathItem = await deleteLearningPathItem(learningPathItemId);

    if (!deletedLearningPathItem) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: learningPathItemControllerMessages.learningPathItemNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: {
        id: learningPathItemId,
        isDeleted: true,
      },
      message: learningPathItemControllerMessages.learningPathItemDeleted,
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
  httpCreateLearningPathItem,
  httpGetUserLearningPathItems,
  httpDeleteUserLearningPathItem,
  httpEditLearningPathItem,
  httpGetGroupLearningPathItems,
  httpDeleteGroupLearningPathItem,
};