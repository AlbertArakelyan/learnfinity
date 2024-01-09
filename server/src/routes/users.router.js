const express = require('express');

const {
  httpSignUp,
  httpVerifyEmail,
  httpSignIn,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.post('/sign-up', httpSignUp);
usersRouter.post('/verify-email/:token', httpVerifyEmail);
usersRouter.post('/sign-in', httpSignIn);

module.exports = usersRouter;