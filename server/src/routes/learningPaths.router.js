const express = require('express');

const {
  httpCreateLearningPath,
  httpGetUserLearningPaths,
  httpGetUserLearningPath,
  httpGetPublicLearningPaths,
  httpGetSharedLearningPaths,
  httpDeleteUserLearningPath,
  httpEditUserLearningPath,
  httpGetGroupLearningPaths,
  httpEditGroupLearningPath,
} = require('../controllers/learningPaths.controller');

const { authMiddleware } = require('../middlewares/users.middleware');
const {
  learningPathAccessMiddleware,
  canEditOrDeleteLearningPathMiddleware,
  canEditOrDeleteGroupLearningPathMiddleware,
} = require('../middlewares/learningPaths.middleware');
const { groupAccessMiddleware } = require('../middlewares/groups.middleware');

const learningPathsRouter = express.Router();

learningPathsRouter.post('/', authMiddleware, httpCreateLearningPath);
learningPathsRouter.get('/shared', authMiddleware, httpGetSharedLearningPaths);
learningPathsRouter.get('/public', authMiddleware, httpGetPublicLearningPaths);
learningPathsRouter.get('/', authMiddleware, httpGetUserLearningPaths);
learningPathsRouter.get('/:learningPathId', authMiddleware, learningPathAccessMiddleware, httpGetUserLearningPath);
learningPathsRouter.delete('/:learningPathId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpDeleteUserLearningPath);
// Can also be used for sharing by changing sharedUserIds (user can be got by emails in frontend and shared without invitation)
learningPathsRouter.patch('/:learningPathId', authMiddleware, canEditOrDeleteLearningPathMiddleware, httpEditUserLearningPath);
learningPathsRouter.get('/group/:groupId', authMiddleware, groupAccessMiddleware, httpGetGroupLearningPaths);
// TODO add API for getting group Learning Path
learningPathsRouter.patch('/:groupId/:learningPathId', authMiddleware, groupAccessMiddleware, canEditOrDeleteGroupLearningPathMiddleware, httpEditGroupLearningPath);
// TODO add delete API (only for creators(userId===) in groups)

module.exports = learningPathsRouter;