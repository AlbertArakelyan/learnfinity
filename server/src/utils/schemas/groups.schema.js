const Joi = require('joi');

const groupSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  userId: Joi.string().required(),
});

module.exports = {
  groupSchema,
};