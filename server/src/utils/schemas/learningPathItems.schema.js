const Joi = require('joi');

const learningPathItemSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  instructions: Joi.string().required(),
  sourceUrl: Joi.string().required(),
  userId: Joi.string().required(),
  learningPathId: Joi.string().required(),
});

module.exports = {
  learningPathItemSchema,
};
