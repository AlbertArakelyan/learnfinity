const express = require('express');

const {
  httpCreateLearningPath,
  httpGetUserLearningPaths,
  httpGetUserLearningPath,
  httpGetPublicLearningPaths,
  httpGetSharedLearningPaths,
} = require('../controllers/learningPaths.controller');

const { authMiddleware } = require('../middlewares/users.middleware');
const { learningPathAccessMiddleware } = require('../middlewares/learningPaths.middleware');

const learningPathsRouter = express.Router();

learningPathsRouter.post('/', authMiddleware, httpCreateLearningPath);
learningPathsRouter.get('/shared', authMiddleware, httpGetSharedLearningPaths);
learningPathsRouter.get('/public', authMiddleware, httpGetPublicLearningPaths);
learningPathsRouter.get('/', authMiddleware, httpGetUserLearningPaths);
learningPathsRouter.get('/:learningPathId', authMiddleware, learningPathAccessMiddleware, httpGetUserLearningPath);
// TODO add delete API
// TODO add update API (for only creators for their ones and only for admins and managers in groups)

module.exports = learningPathsRouter;