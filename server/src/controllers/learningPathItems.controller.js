const {
  validateLearningPathItem,
  createLearningPathItem,
} = require('../models/learningPathItems/learningPathItems.model');

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

module.exports = {
  httpCreateUserLearningPathItem,
};