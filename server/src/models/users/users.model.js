const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const { signUpSchema, signInSchema, resetPasswordSchema } = require('../../utils/schemas/users.schema');

const User = require('./users.mongo');
const transporter = require('../../utils/transporter');
const { userControllerMessages } = require('../../constants/controllerMessages');
const { bcryptComplexity } = require('../../constants/global');
const {func} = require("joi");

/**
 * Finds a user by their ID.
 *
 * @param {string} userId - The ID of the user.
 * @return {Promise<object>} A promise that resolves to the user object.
 */
async function findUserById(userId) {
  return await User.findById(userId);
}

/**
 * Finds an existing user in the database using their email.
 *
 * @param {string} email - The email of the user to search for.
 * @return {Promise<User>} A promise that resolves to the user object if found, or null if not found.
 */
async function findExistingUserByEmail(email) {
  return await User.findOne({ email });
}

/**
 * Validates a user object against the signUpSchema.
 *
 * @param {Object} user - The user object to be validated.
 * @return {Object} The validation error object, if any.
 */
function validateUser(user) {
  const { error } = signUpSchema.validate(user);
  
  return error;
}

/**
 * Validates the sign-in process for a user.
 *
 * @param {Object} user - The user object to be validated.
 * @return {Object} The validation error, if any.
 */
function validateSignIn(user) {
  const { error } = signInSchema.validate(user);

  return error;
}

/**
 * Creates a new user account and sends a verification email.
 *
 * @param {Object} userData - The user data.
 * @param {string} userData.fullName - The full name of the user.
 * @param {string} userData.email - The email of the user.
 * @param {string} userData.password - The password of the user.
 * @return {Promise<string>} The email address of the user.
 */
async function signUp(userData) {
  const {
    fullName,
    email,
    password,
  } = userData;

  const hashedPassword = await bcrypt.hash(password, bcryptComplexity);

  const user = new User({
    email,
    password: hashedPassword,
    fullName,
    isEmailVerified: false,
  });

  const verificationToken = jwt.sign({
    userId: user._id,
  }, process.env.JWT_SECRET);

  const verificationUrl = `${process.env.NODEMAILER_WEBSITE_URL}verify/${verificationToken}`;

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: userControllerMessages.pleaseVerifyYourEmail,
    html: `Please click this link to verify your email: <a href="${verificationUrl}">${verificationUrl}</a>`,
  };

  let sendEmailError;

  transporter.sendMail(mailOptions, (error, info) => {
    // TODO improve error catching as it remains inside of this block
    if (error) {
      sendEmailError = error;
      return;
    }

    console.log(`Email sent: ${info.response}`);
  });

  // TODO improve error catching as here sendEmailError still is not defined
  if (sendEmailError) {
    console.log('if/sendEmailError', sendEmailError);
    throw new Error(sendEmailError);
  }

  await user.save();

  return email;
}

/**
 * Checks if the email associated with the given token has already been verified.
 *
 * @param {string} token - The verification token.
 * @return {boolean} - True if the email is verified, false otherwise.
 */
async function isEmailAlreadyVerified(token) {
  const { userId } = jwt.verify(token, process.env.JWT_SECRET);

  const user = await findUserById(userId);

  // TODO even though a token is invalid it still sends "Email is already verified"
  return user && user.isEmailVerified;
}

/**
 * Verify an email using the provided token.
 *
 * @param {string} token - The token to verify the email.
 * @return {Object|boolean} - An object containing the token and the email verification status, or false if the user is not found.
 */
async function verifyEmail(token) {
  const { userId } = jwt.verify(token, process.env.JWT_SECRET);

  const user = await findUserById(userId);

  if (!user) {
    return;
  }

  user.isEmailVerified = true;

  await user.save();

  return {
    token,
    isEmailVerified: true,
  };
}

/**
 * Determines whether sign-in is allowed for a given email and password.
 *
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @return {Object} An object indicating whether sign-in is allowed and the reason if not allowed.
 *
 *                  - isAllowed: A boolean value indicating whether sign-in is allowed.
 *                  - reason: A string providing the reason if sign-in is not allowed.
 */
async function isSignInAllowed(email, password) {
  const user = await findExistingUserByEmail(email);

  if (!user) {
    return {
      isAllowed: false,
      reason: userControllerMessages.invalidEmailOrPassword,
    };
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return {
      isAllowed: false,
      reason: userControllerMessages.invalidEmailOrPassword,
    };
  }

  if (!user.isEmailVerified) {
    return {
      isAllowed: false,
      reason: userControllerMessages.emailNotVerified,
    };
  }

  return {
    isAllowed: true,
  };
}

/**
 * Retrieves user data and generates an access token for sign in.
 *
 * @param {string} email - The email of the user signing in.
 * @return {Object} An object containing the user data and the generated access token.
 */
async function signIn(email) {
  const user = await findExistingUserByEmail(email);

  const userData = {
    id: user._id,
    email: user.email,
    fullName: user.fullName,
    photoUrl: user.photoUrl,
  };

  const accessToken = jwt.sign(userData, process.env.JWT_SECRET);

  return {
    userData,
    accessToken,
  };
}

/**
 * Creates a reset password URL for the given email.
 *
 * @param {string} email - The email of the user.
 * @return {string} The reset password URL.
 */
async function createResetPasswordUrl(email) {
  const user = await findExistingUserByEmail(email);

  const resetToken = crypto.randomUUID().toString('hex');

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

  await user.save();

  const resetUrl = `${process.env.NODEMAILER_WEBSITE_URL}reset-password/${resetToken}`;

  return resetUrl;
}

/**
 * Sends a password reset email to the specified email address.
 *
 * @param {string} email - The email address of the user.
 * @return {string} The email address that was sent the reset password link.
 */
async function forgotPassword(email) {
  const resetUrl = await createResetPasswordUrl(email);

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: userControllerMessages.resetPassword,
    html: `Please click this link to reset your password: <a href="${resetUrl}">${resetUrl}</a>`,
  };

  let sendEmailError;

  transporter.sendMail(mailOptions, (error, info) => {
    // TODO improve error catching as it remains inside of this block
    if (error) {
      sendEmailError = error;
      return;
    }

    console.log(`Email sent: ${info.response}`);
  });

  // TODO improve error catching as here sendEmailError still is not defined
  if (sendEmailError) {
    console.log('if/sendEmailError', sendEmailError);
    throw new Error(sendEmailError);
  }

  return email;
}

/**
 * Validates the provided password data for resetting the password.
 *
 * @param {object} passwordData - The password data to be validated.
 * @property {string} password - The new password.
 * @property {string} confirmPassword - The confirmation of the new password.
 * @return {object} The validation error, if any.
 */
function validateResetPassword(passwordData) {
  const { error } = resetPasswordSchema.validate(passwordData);

  return error;
}

/**
 * Resets the user's password.
 *
 * @param {string} token - The reset password token.
 * @param {string} password - The new password.
 * @param {string} confirmPassword - The confirmation of the new password.
 * @return {Object} - An object indicating whether the password was reset successfully.
 */
async function resetPassword(token, password) {
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return;
  }

  const hashedPassword = await bcrypt.hash(password, bcryptComplexity);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  return {
    isPasswordReset: true,
  };
}

module.exports = {
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
};