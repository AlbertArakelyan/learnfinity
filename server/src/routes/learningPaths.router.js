const express = require('express');

const {
  httpCreateLearningPath,
  httpGetUserLearningPaths,
  httpGetUserLearningPath,
  httpGetPublicLearningPaths,
  httpGetSharedLearningPaths,
  httpDeleteLearningPath,
} = require('../controllers/learningPaths.controller');

const { authMiddleware } = require('../middlewares/users.middleware');
const { learningPathAccessMiddleware, canEditOrDeleteLearningPathMiddleware } = require('../middlewares/learningPaths.middleware');

const learningPathsRouter = express.Router();

learningPathsRouter.post('/', authMiddleware, httpCreateLearningPath);
learningPathsRouter.get('/shared', authMiddleware, httpGetSharedLearningPaths);
learningPathsRouter.get('/public', authMiddleware, httpGetPublicLearningPaths);
learningPathsRouter.get('/', authMiddleware, httpGetUserLearningPaths);
learningPathsRouter.get('/:learningPathId', authMiddleware, learningPathAccessMiddleware, httpGetUserLearningPath);
// TODO add delete API (for only creators for their ones and only for admins and managers in groups)
learningPathsRouter.delete('/:learningPathId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpDeleteLearningPath);
// TODO add update API (for only creators for their ones and only for admins and managers in groups)

module.exports = learningPathsRouter;