const express = require('express');

const {
  httpCreateGroup,
  httpGetGroups,
  httpDeleteGroup,
} = require('../controllers/groups.controller');

const { authMiddleware } = require('../middlewares/users.middleware');

const groupsRouter = express.Router();

groupsRouter.post('/', authMiddleware, httpCreateGroup);
groupsRouter.get('/', authMiddleware, httpGetGroups);
groupsRouter.delete('/:groupId', authMiddleware, httpDeleteGroup);

module.exports = groupsRouter;