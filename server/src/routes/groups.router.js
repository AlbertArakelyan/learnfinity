const express = require('express');

const {
  httpCreateGroup,
  httpGetGroups,
  httpGetGroup,
  httpDeleteGroup,
  httpUpdateGroup,
  httpInviteUserToGroup,
  httpAddUserToGroup,
  httpDeleteUserFromGroup,
} = require('../controllers/groups.controller');

const { authMiddleware } = require('../middlewares/users.middleware');
const { groupAccessMiddleware } = require('../middlewares/groups.middleware');

const groupsRouter = express.Router();

groupsRouter.post('/', authMiddleware, httpCreateGroup);
groupsRouter.get('/', authMiddleware, httpGetGroups);
groupsRouter.get('/:groupId', authMiddleware, groupAccessMiddleware, httpGetGroup);
groupsRouter.delete('/:groupId', authMiddleware, groupAccessMiddleware, httpDeleteGroup); // TODO add permission middleware
groupsRouter.patch('/:groupId', authMiddleware, groupAccessMiddleware, httpUpdateGroup); // TODO add permission middleware
groupsRouter.post('/:groupId', authMiddleware, groupAccessMiddleware, httpInviteUserToGroup); // TODO add permission middleware
groupsRouter.post('/:groupId/:invitationToken', authMiddleware, groupAccessMiddleware, httpAddUserToGroup); // TODO add permission middleware
// TODO create removeUserFromGroup API with /:groupId/:userId
groupsRouter.delete('/:groupId/:userId', authMiddleware, groupAccessMiddleware, httpDeleteUserFromGroup); // TODO add permission middleware
// TODO create editUserGroupRole API with /:groupId/:userId (role with body)

module.exports = groupsRouter;