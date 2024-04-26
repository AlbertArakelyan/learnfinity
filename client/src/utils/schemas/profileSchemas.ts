import * as yup from 'yup';

import {
  requiredMessage,
  validationLength,
  minValidationLength,
  minLengthMessage,
  maxLengthMessage,
} from 'constants/validation';

export const nameSchema = yup.object({
  fullName: yup
    .string()
    .min(minValidationLength.min, minLengthMessage.min)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
});

export const changePasswordSchema = yup.object({
  oldPassword: yup
    .string()
    .min(minValidationLength.base, minLengthMessage.base)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
  newPassword: yup
    .string()
    .min(minValidationLength.base, minLengthMessage.base)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
});

export const deleteAccountSchema = yup.object({
  password: yup
    .string()
    .min(minValidationLength.base, minLengthMessage.base)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
});
