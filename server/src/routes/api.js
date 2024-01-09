const express = require('express');

const usersRouter = require('./users.router');

const api = express.Router();

api.use('/users', usersRouter);

module.exports = api;