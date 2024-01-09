const express = require('express');

const {
  httpSignUp,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.post('/sign-up', httpSignUp);

module.exports = usersRouter;