const express = require('express');

const {
  httpSignUp,
  httpVerifyEmail,
  httpSignIn,
  httpForgotPassword,
  httpResetPassword,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.post('/sign-up', httpSignUp);
usersRouter.post('/verify-email/:token', httpVerifyEmail);
usersRouter.post('/sign-in', httpSignIn);
usersRouter.post('/forgot-password', httpForgotPassword);
usersRouter.post('/reset-password', httpResetPassword);

module.exports = usersRouter;