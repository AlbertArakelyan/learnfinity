const mongoose = require('mongoose');

const learningPathsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isPrivate: {
    type: Boolean,
    required: true
  },
  isCreatedInGroup: {
    type: Boolean,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  groupId: {
    // TODO create duplication functionality into other groups
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    default: null,
  },
  tags: [{
    type: String,
    required: true,
    default: [],
  }],
  sharedUserIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = mongoose.model('LearningPath', learningPathsSchema);