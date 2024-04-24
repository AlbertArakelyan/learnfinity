import * as yup from 'yup';

import {
  requiredMessage,
  validationLength,
  minValidationLength,
  minLengthMessage,
  maxLengthMessage,
  urlRegex,
  regexMessages,
} from 'constants/validation';

const learningPathItemSchema = yup.object({
  name: yup
    .string()
    .required(requiredMessage)
    .min(minValidationLength.min, minLengthMessage.min)
    .max(validationLength.base, maxLengthMessage.base),
  description: yup
    .string()
    .required(requiredMessage)
    .min(minValidationLength.min, minLengthMessage.min)
    .max(validationLength.long, maxLengthMessage.long),
  instructions: yup
    .string()
    .required(requiredMessage)
    .min(minValidationLength.min, minLengthMessage.min)
    .max(validationLength.long, maxLengthMessage.long),
  type: yup.string().required(requiredMessage),
  sourceUrl: yup.string().required(requiredMessage).matches(urlRegex, regexMessages.url),
});

export type ILearningPathItemSchemaType = yup.InferType<typeof learningPathItemSchema>;

export default learningPathItemSchema;
