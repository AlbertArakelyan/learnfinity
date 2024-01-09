const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const usersSchema = require('../../utils/schemas/users.schema');

const User = require('./users.mongo');
const transporter = require('../../utils/transporter');
const { userControllerMessages } = require('../../constants/controllerMessages');
const { bcryptComplexity } = require('../../constants/global');

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
 * Validates a user object against the usersSchema.
 *
 * @param {Object} user - The user object to be validated.
 * @return {Object} The validation error object, if any.
 */
function validateUser(user) {
  const { error } = usersSchema.validate(user);
  
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

  return user.isEmailVerified;
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

module.exports = {
  findUserById,
  findExistingUserByEmail,
  validateUser,
  signUp,
  isEmailAlreadyVerified,
  verifyEmail,
};