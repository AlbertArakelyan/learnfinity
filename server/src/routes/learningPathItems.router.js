const express = require('express');

const {
  httpCreateUserLearningPathItem,
  httpGetUserLearningPathItems,
  httpDeleteUserLearningPathItem,
  httpEditUserLearningPathItem,
} = require('../controllers/learningPathItems.controller');

const { authMiddleware } = require('../middlewares/users.middleware');
const { canEditOrDeleteLearningPathMiddleware, learningPathAccessMiddleware } = require('../middlewares/learningPaths.middleware');

const learningPathItemsRouter = express.Router();

learningPathItemsRouter.post('/:learningPathId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpCreateUserLearningPathItem);
learningPathItemsRouter.get('/:learningPathId', authMiddleware, learningPathAccessMiddleware, httpGetUserLearningPathItems);
learningPathItemsRouter.delete('/:learningPathId/:learningPathItemId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpDeleteUserLearningPathItem);
learningPathItemsRouter.patch('/:learningPathId/:learningPathItemId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpEditUserLearningPathItem);

module.exports = learningPathItemsRouter;
