const {
  findExistingUserByEmail,
  validateUser,
  validateSignIn,
  signUp,
  isEmailAlreadyVerified,
  verifyEmail,
  isSignInAllowed,
  signIn,
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

    const existingUser = await findExistingUserByEmail(user.email);

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

async function httpVerifyEmail(req, res) {
  try {
    const { token } = req.params;

    const isEmailVerified = await isEmailAlreadyVerified(token);

    if (isEmailVerified) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: userControllerMessages.emailAlreadyVerified,
        statusCode: httpStatuses.badRequest,
      });
    }

    const verifyEmailData = await verifyEmail(token);

    if (!verifyEmailData) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: userControllerMessages.userNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: verifyEmailData,
      message: userControllerMessages.emailVerified,
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

async function httpSignIn(req, res) {
  try {
    const signInBody = req.body;

    const error = validateSignIn(signInBody);

    if (error) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: error.details[0].message,
        statusCode: httpStatuses.badRequest,
      });
    }

    const { email, password } = signInBody;

    const isSignInAllowedData = await isSignInAllowed(email, password);

    if (!isSignInAllowedData.isAllowed) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: isSignInAllowedData.reason,
        statusCode: httpStatuses.badRequest,
      });
    }

    const signInData = await signIn(email);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: signInData,
      message: userControllerMessages.signIn,
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
  httpSignUp,
  httpVerifyEmail,
  httpSignIn,
};