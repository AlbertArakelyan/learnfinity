const userControllerMessages = {
  userExists: 'User with this email already exists',
  pleaseVerifyYourEmail: 'Please verify your email.',
  verifyEmail: 'Verification Message has successfully been sent.',
  emailVerified: 'Email has successfully been verified.',
  emailAlreadyVerified: 'Email has already been verified',
  userNotFound: 'User not found', // TODO make more meneangful
  invalidEmailOrPassword: 'Invalid email or password',
  emailNotVerified: 'Email not verified',
  forgotPasswordMailSent: 'Password reset email has been sent',
  resetPassword: 'Reset password',
  passwordsDontMatch: 'Passwords do not match',
  invalidToken: 'Invalid token',
  passwordReset: 'Password has been reset',
};

const smthWentWrong = 'Something went wrong';

module.exports = {
  userControllerMessages,
  smthWentWrong,
};