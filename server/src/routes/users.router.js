const express = require('express');

const {
  httpSignUp,
  httpVerifyEmail,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.post('/sign-up', httpSignUp);
usersRouter.post('/verify-email/:token', httpVerifyEmail);

module.exports = usersRouter;