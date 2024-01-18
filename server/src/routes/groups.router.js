const express = require('express');

const {
  httpCreateGroup,
  httpGetGroups,
} = require('../controllers/groups.controller');

const { authMiddleware } = require('../middlewares/users.middleware');

const groupsRouter = express.Router();

groupsRouter.post('/', authMiddleware, httpCreateGroup);
groupsRouter.get('/', authMiddleware, httpGetGroups);

module.exports = groupsRouter;