const Joi = require('joi');

const {
  minValidationLength,
} = require('../../constants/validation');

const usersSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(minValidationLength.base),
  confirmPassword: Joi.ref('password'),
  isEmailVerified: Joi.boolean(),
  resetPasswordToken: Joi.string(),
  resetPasswordExpires: Joi.number(),
  photoUrl: Joi.string(),
});

module.exports = usersSchema;