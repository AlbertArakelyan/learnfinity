const mongoose = require('mongoose');

const userGroupRoleRelationshipsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
});

module.exports = mongoose.model('UserGroupRoleRelationship', userGroupRoleRelationshipsSchema);