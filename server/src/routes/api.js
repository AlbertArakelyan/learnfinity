const express = require('express');

const usersRouter = require('./users.router');
const groupsRouter = require('./groups.router');
const learningPathsRouter = require('./learningPaths.router');
const learningPathItemsRouter = require('./learningPathItems.router');

const api = express.Router();

api.use('/users', usersRouter);
api.use('/groups', groupsRouter);
api.use('/learning-paths', learningPathsRouter);
api.use('/learning-path-items', learningPathItemsRouter);

module.exports = api;
