const express = require('express');

const {
  httpCreateGroup,
  httpGetGroups,
  httpGetGroup,
  httpDeleteGroup,
  httpUpdateGroup,
} = require('../controllers/groups.controller');

const { authMiddleware } = require('../middlewares/users.middleware');
const { groupAccessMiddleware } = require('../middlewares/groups.middleware');

const groupsRouter = express.Router();

groupsRouter.post('/', authMiddleware, httpCreateGroup);
groupsRouter.get('/', authMiddleware, httpGetGroups);
groupsRouter.get('/:groupId', authMiddleware, groupAccessMiddleware, httpGetGroup);
groupsRouter.delete('/:groupId', authMiddleware, groupAccessMiddleware, httpDeleteGroup); // TODO add permission middleware
groupsRouter.patch('/:groupId', authMiddleware, groupAccessMiddleware, httpUpdateGroup); // TODO add permission middleware
// TODO create inviteUserToGroup API with /:groupId (role and email with body) create a token with users email and role
// TODO create addUserToGroup API with /:groupId/:invitationToken (role and email from the token, find the user by email)
// TODO create removeUserFromGroup API with /:groupId/:userId
// TODO create editUserGroupRole API with /:groupId/:userId (role with body)

module.exports = groupsRouter;