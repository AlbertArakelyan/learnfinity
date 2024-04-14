import * as yup from 'yup';

// Constants
import { requiredMessage, emailMessage, validationLength, maxLengthMessage } from 'constants/validation';

const forgotPasswordSchema = yup.object({
  email: yup.string().email(emailMessage).max(validationLength.base, maxLengthMessage.base).required(requiredMessage),
});

export type ForgotPasswordFormDataType = yup.InferType<typeof forgotPasswordSchema>;

export default forgotPasswordSchema;
