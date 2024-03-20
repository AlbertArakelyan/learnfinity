const express = require('express');

const {
  httpCreateUserLearningPathItem,
} = require('../controllers/learningPathItems.controller');

const { authMiddleware } = require('../middlewares/users.middleware');
const { canEditOrDeleteLearningPathMiddleware } = require('../middlewares/learningPaths.middleware');

const learningPathItemsRouter = express.Router();

learningPathItemsRouter.post('/:learningPathId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpCreateUserLearningPathItem);

module.exports = learningPathItemsRouter;
