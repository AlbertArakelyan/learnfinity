const express = require('express');

const {
  httpCreateLearningPathItem,
  httpGetUserLearningPathItems,
  httpDeleteUserLearningPathItem,
  httpEditUserLearningPathItem,
  httpGetGroupLearningPathItems,
} = require('../controllers/learningPathItems.controller');

const { authMiddleware } = require('../middlewares/users.middleware');
const { canEditOrDeleteLearningPathMiddleware, learningPathAccessMiddleware } = require('../middlewares/learningPaths.middleware');
const { canEditOrDeleteGroupMiddleware, groupAccessMiddleware } = require('../middlewares/groups.middleware');

const learningPathItemsRouter = express.Router();

learningPathItemsRouter.post('/:learningPathId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpCreateLearningPathItem);
learningPathItemsRouter.get('/:learningPathId', authMiddleware, learningPathAccessMiddleware, httpGetUserLearningPathItems);
learningPathItemsRouter.delete('/:learningPathId/:learningPathItemId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpDeleteUserLearningPathItem);
learningPathItemsRouter.patch('/:learningPathId/:learningPathItemId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpEditUserLearningPathItem);
learningPathItemsRouter.post('/:groupId/:learningPathId', authMiddleware, canEditOrDeleteGroupMiddleware, httpCreateLearningPathItem);
learningPathItemsRouter.get('/:groupId/:learningPathId', authMiddleware, groupAccessMiddleware, httpGetGroupLearningPathItems);

module.exports = learningPathItemsRouter;
