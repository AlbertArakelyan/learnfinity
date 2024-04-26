const fs = require('fs');
const path = require('path');

require('dotenv').config();

const {
  findUserById,
  findExistingUserByEmail,
  validateUser,
  validateSignIn,
  signUp,
  isEmailAlreadyVerified,
  verifyEmail,
  isSignInAllowed,
  signIn,
  forgotPassword,
  validateResetPassword,
  resetPassword,
  editUser,
  isChangePasswordAllowed,
  changeUserPassword,
  checkIsPasswordCorrect,
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

async function httpForgotPassword(req, res) {
  try {
    const { email } = req.body;

    const user = await findExistingUserByEmail(email);

    if (!user) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: userControllerMessages.userNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    const responseEmail = await forgotPassword(email);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: {
        email: responseEmail,
      },
      message: userControllerMessages.forgotPasswordMailSent,
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

async function httpResetPassword(req, res) {
  try {
    const { resetToken, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: userControllerMessages.passwordsDontMatch,
        statusCode: httpStatuses.badRequest,
      });
    }

    const error = validateResetPassword({ password, confirmPassword });

    if (error) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: error.details[0].message,
        statusCode: httpStatuses.badRequest,
      });
    }

    const resetPasswordData = await resetPassword(resetToken, password);

    if (!resetPasswordData) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: userControllerMessages.userNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    return res.status(httpStatuses.ok).json({
      success: true,
      data: resetPasswordData,
      message: userControllerMessages.passwordReset,
      statusCode: httpStatuses.ok,
    })
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

async function httpEditUser(req, res) {
  try {
    const userId = req.user.id;
    const userData = req.body;

    if (!userId) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: userControllerMessages.userNotFound,
        statusCode: httpStatuses.badRequest,
      });
    }

    // TODO add validation that userData doesn't contain any password and email fields
    // TODO rather it can accept only fullName :)

    const editUserData = await editUser(userId, userData);

    if (!editUserData) {
      return res.status(httpStatuses.notFound).json({
        success: false,
        message: userControllerMessages.userNotFound,
        statusCode: httpStatuses.notFound,
      });
    }

    const editUserSendData = {
      id: editUserData._id,
      email: editUserData.email,
      fullName: editUserData.fullName,
      photoUrl: editUserData.photoUrl,
    };

    return res.status(httpStatuses.ok).json({
      success: true,
      data: editUserSendData,
      message: userControllerMessages.userUpdated,
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

async function httpChangePassword(req, res) {
  try {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;

    const isChangePasswordAllowedData = await isChangePasswordAllowed(userId, oldPassword);

    if (!isChangePasswordAllowedData.isAllowed) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: isChangePasswordAllowedData.reason,
        statusCode: httpStatuses.badRequest,
      });
    }

    await changeUserPassword(userId, newPassword);

    return res.status(httpStatuses.ok).json({
      success: true,
      data: {
        isPasswordChanged: true,
      },
      message: userControllerMessages.passwordChanged,
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

async function httpChangeAvatar(req, res) {
  try {
    const userId = req.user.id;
    const { image } = req.body;

    // Extract image data from base64 string
    const matches = image.match(/^data:image\/([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: 'Invalid base64 image data.' });
    }

    const extension = matches[1].split('/')[0];
    const bufferData = Buffer.from(matches[2], 'base64');

    // Generate filename using user ID and image extension
    const filename = `${userId}.${extension}`;

    // Set the path to save avatars
    const filePath = path.join(__dirname, '..', '..', 'storage', 'avatars');

    // Check if the avatars directory exists, if not, create it
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }

    // Write the file to the avatars directory, overriding existing one if any
    const avatarPath = path.join(filePath, filename);

    fs.writeFileSync(avatarPath, bufferData);

    const photoUrl = `${process.env.API_BASE_URL}storage/avatars/${filename}`;

    await editUser(userId, { photoUrl });

    return res.status(httpStatuses.ok).json({
      success: true,
      data: {
        photoUrl,
      },
      message: userControllerMessages.avatarChanged,
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

async function httpGetUserData(req, res) {
  try {
    const userId = req.user.id;

    const user = await findUserById(userId);

    const userData = {
      id: user._id,
      email: user.email,
      fullName: user.fullName,
      photoUrl: user.photoUrl,
    };

    return res.status(httpStatuses.ok).json({
      success: true,
      data: userData,
      message: userControllerMessages.userDataReceived,
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
  httpForgotPassword,
  httpResetPassword,
  httpEditUser,
  httpChangePassword,
  httpChangeAvatar,
  httpGetUserData,
};