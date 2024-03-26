const express = require('express');

const {
  httpSignUp,
  httpVerifyEmail,
  httpSignIn,
  httpForgotPassword,
  httpResetPassword,
  httpEditUser,
  httpChangePassword,
} = require('../controllers/users.controller');

const { authMiddleware } = require('../middlewares/users.middleware');

const usersRouter = express.Router();

usersRouter.post('/sign-up', httpSignUp);
usersRouter.post('/verify-email/:token', httpVerifyEmail);
usersRouter.post('/sign-in', httpSignIn);
usersRouter.post('/forgot-password', httpForgotPassword);
usersRouter.post('/reset-password', httpResetPassword);
usersRouter.patch('/edit', authMiddleware, httpEditUser);
usersRouter.patch('/change-password', authMiddleware, httpChangePassword);

module.exports = usersRouter;