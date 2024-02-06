const express = require('express');

const {
  httpCreateLearningPath,
  httpGetUserLearningPaths,
  httpGetUserLearningPath,
} = require('../controllers/learningPaths.controller');

const { authMiddleware } = require('../middlewares/users.middleware');

const learningPathsRouter = express.Router();

learningPathsRouter.post('/', authMiddleware, httpCreateLearningPath);
learningPathsRouter.get('/', authMiddleware, httpGetUserLearningPaths);
learningPathsRouter.get('/:learningPathId', authMiddleware, httpGetUserLearningPath);
// TODO create a separate API for shared ones
// TODO create a separate API for public ones (getting all)

module.exports = learningPathsRouter;