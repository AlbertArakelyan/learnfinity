const express = require('express');

const {
  httpCreateLearningPath,
  httpGetUserLearningPaths,
} = require('../controllers/learningPaths.controller');

const { authMiddleware } = require('../middlewares/users.middleware');

const learningPathsRouter = express.Router();

learningPathsRouter.post('/', authMiddleware, httpCreateLearningPath);
learningPathsRouter.get('/', authMiddleware, httpGetUserLearningPaths);
// TODO create a separate API for shared ones

module.exports = learningPathsRouter;