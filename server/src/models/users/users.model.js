const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const usersSchema = require('../../utils/schemas/users.schema');

const User = require('./users.mongo');
const transporter = require('../../utils/transporter');
const { userControllerMessages } = require('../../constants/controllerMessages');
const { bcryptComplexity } = require('../../constants/global');

async function findUserById(userId) {
  return await User.findById(userId);
}

async function findExistingUserByEmail(email) {
  return await User.findOne({ email });
}

function validateUser(user) {
  const { error } = usersSchema.validate(user);
  
  return error;
}

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

async function isEmailAlreadyVerified(token) {
  const { userId } = jwt.verify(token, process.env.JWT_SECRET);

  const user = await findUserById(userId);

  return user.isEmailVerified;
}

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