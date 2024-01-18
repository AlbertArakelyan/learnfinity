const express = require('express');

const usersRouter = require('./users.router');
const groupsRouter = require('./groups.router');

const api = express.Router();

api.use('/users', usersRouter);
api.use('/groups', groupsRouter);

module.exports = api;