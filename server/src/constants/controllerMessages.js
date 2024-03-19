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

const groupControllerMessages = {
  groupCreated: 'Group has been created',
  groupsReceived: 'Groups received',
  groupNotFound: 'Group not found',
  groupUpdated: 'Group has been updated',
  groupReceived: 'Group received',
  notFoundOrDontHavePermission: 'Group not found or you do not have permission',
  userInvited: (email) => `User ${email} has been invited to join the group`,
  userAddedToGroup: (email) => `User ${email} has been added to the group`,
  userAlreadyInGroup: `User is already in the group`,
  userDeletedFromGroup: 'User has been deleted from the group',
  roleNotFound: 'Role not found or invalid',
  roleEdited: 'Role has been edited',
};

const learningPathControllerMessages = {
  learningPathsInGroupMustBePrivate: 'Learning paths in groups must be private',
  learningPathCreated: 'Learning path has been created',
  learningPathsReceived: 'Learning paths received',
  learningPathNotFound: 'Learning path not found',
  learningPathsNotFound: 'Learning paths not found',
  learningPathReceived: 'Learning path received',
  learningPathDeleted: 'Learning path has been deleted',
  learningPathUpdated: 'Learning path has been updated',
  groupedLearningPathsNotFound: 'Grouped learning paths not found',
  groupedLearningPathsReceived: 'Grouped learning paths received',
};

const smthWentWrong = 'Something went wrong';

module.exports = {
  userControllerMessages,
  groupControllerMessages,
  learningPathControllerMessages,
  smthWentWrong,
};