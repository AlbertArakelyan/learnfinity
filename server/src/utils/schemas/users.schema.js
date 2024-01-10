const Joi = require('joi');

const {
  minValidationLength,
} = require('../../constants/validation');

const signUpSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(minValidationLength.base),
  confirmPassword: Joi.ref('password'),
  isEmailVerified: Joi.boolean(),
  resetPasswordToken: Joi.string(),
  resetPasswordExpires: Joi.number(),
  photoUrl: Joi.string(),
});

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(minValidationLength.base),
});

const resetPasswordSchema = Joi.object({
  password: Joi.string().required().min(minValidationLength.base),
  confirmPassword: Joi.ref('password'),
});

module.exports = {
  signUpSchema,
  signInSchema,
  resetPasswordSchema,
};