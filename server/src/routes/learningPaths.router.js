const express = require('express');

const {
  httpCreateLearningPath,
} = require('../controllers/learningPaths.controller');

const { authMiddleware } = require('../middlewares/users.middleware');

const learningPathsRouter = express.Router();

learningPathsRouter.post('/', authMiddleware, httpCreateLearningPath);

module.exports = learningPathsRouter;