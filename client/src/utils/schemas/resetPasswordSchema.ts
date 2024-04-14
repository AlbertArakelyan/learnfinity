import * as yup from 'yup';

// Constants
import {
  requiredMessage,
  passwordsMessage,
  validationLength,
  minValidationLength,
  minLengthMessage,
  maxLengthMessage,
} from 'constants/validation';

const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(minValidationLength.base, minLengthMessage.base)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
  confirmPassword: yup
    .string()
    .required(requiredMessage)
    .oneOf([yup.ref('password')], passwordsMessage),
});

export type ResetPasswordFormDataType = yup.InferType<typeof resetPasswordSchema>;

export default resetPasswordSchema;
