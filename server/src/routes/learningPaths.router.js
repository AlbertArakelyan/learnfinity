const express = require('express');

const {
  httpCreateLearningPath,
  httpGetUserLearningPaths,
  httpGetUserLearningPath,
  httpGetPublicLearningPaths,
} = require('../controllers/learningPaths.controller');

const { authMiddleware } = require('../middlewares/users.middleware');

const learningPathsRouter = express.Router();

learningPathsRouter.post('/', authMiddleware, httpCreateLearningPath);
learningPathsRouter.get('/public', authMiddleware, httpGetPublicLearningPaths);
learningPathsRouter.get('/', authMiddleware, httpGetUserLearningPaths);
learningPathsRouter.get('/:learningPathId', authMiddleware, httpGetUserLearningPath);

module.exports = learningPathsRouter;