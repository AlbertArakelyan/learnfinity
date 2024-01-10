// const requiredMessage = 'Required';
// const emailMessage = 'Invalid email address';
// const passwordsMessage = "Passwords don't match";

const validationLength = {
  short: 64,
  base: 128,
  long: 256,
};

const minValidationLength = {
  base: 8,
};

// const generateMaxLengthMessage = (length) => {
//   return `Text is too long (maximum is ${validationLength[length]})`;
// };
//
// const generateMinLengthMessage = (length) => {
//   return `At least ${minValidationLength[length]} characters needed`;
// };
//
// const maxLengthMessage = {
//   short: generateMaxLengthMessage('short'),
//   base: generateMaxLengthMessage('base'),
//   long: generateMaxLengthMessage('long'),
// };
//
// const minLengthMessage = {
//   base: generateMinLengthMessage('base'),
// };

module.exports = {
  // requiredMessage,
  // emailMessage,
  // passwordsMessage,
  validationLength,
  minValidationLength,
  // maxLengthMessage,
  // minLengthMessage,
};