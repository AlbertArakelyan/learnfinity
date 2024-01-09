const {
  findExistingUser,
  validateUser,
  signUp,
} = require('../models/users/users.model');

const httpStatuses = require('../constants/httpStatuses');
const { userControllerMessages, smthWentWrong } = require('../constants/controllerMessages');

async function httpSignUp(req, res) {
  try {
    const user = req.body;

    const error = validateUser(user);

    if (error) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: error.details[0].message,
        statusCode: httpStatuses.badRequest,
      });
    }

    const existingUser = await findExistingUser(user.email);

    if (existingUser) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: userControllerMessages.userExists,
        statusCode: httpStatuses.badRequest,
      });
    }

    const responseEmail = await signUp(user);

    return res.status(httpStatuses.created).json({
      success: true,
      data: {
        email: responseEmail,
      },
      message: userControllerMessages.verifyEmail,
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
  httpSignUp,
};