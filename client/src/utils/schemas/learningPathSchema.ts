import * as yup from 'yup';

import {
  requiredMessage,
  validationLength,
  minValidationLength,
  minLengthMessage,
  maxLengthMessage,
} from 'constants/validation';

const learningPathSchema = yup.object({
  name: yup
    .string()
    .min(minValidationLength.min, minLengthMessage.min)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
  description: yup
    .string()
    .min(minValidationLength.min, minLengthMessage.min)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
  isPrivate: yup.boolean().required(requiredMessage),
  tags: yup.array(yup.string().required()).required(requiredMessage),
});

export type LearningPathSchemaType = yup.InferType<typeof learningPathSchema>;

export default learningPathSchema;
