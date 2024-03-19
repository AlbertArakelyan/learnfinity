const Joi = require('joi');

const learningPathSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  isPrivate: Joi.boolean().required(),
  isCreatedInGroup: Joi.boolean().required(),
  userId: Joi.string().required(),
  groupId: Joi.string(),
  tags: Joi.array().required(),
  sharedUserIds: Joi.array(),
});

module.exports = {
  learningPathSchema,
};