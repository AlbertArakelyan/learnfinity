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
  userUpdated: 'User has been updated',
  invalidPassword: 'Invalid password',
  passwordChanged: 'Password has been changed',
  avatarChanged: 'Avatar has been changed',
  userDataReceived: 'User data received',
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
  youDontHavePermission: 'You do not have permission to edit or delete this group',
  youAreNotInThisGroup: 'You are not in this group or you do not have permission',
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
  youDontHavePermission: 'You do not have permission to edit or delete this learning path',
};

const learningPathItemControllerMessages = {
  learningPathItemCreated: 'Learning path item has been created',
  learningPathItemNotFound: 'Learning path item not found',
  learningPathItemUpdated: 'Learning path item has been updated',
  learningPathItemDeleted: 'Learning path item has been deleted',
  learningPathItemsReceived: 'Learning path items received',
  learningPathItemsNotFound: 'Learning path items not found',
};

const smthWentWrong = 'Something went wrong';

module.exports = {
  userControllerMessages,
  groupControllerMessages,
  learningPathControllerMessages,
  learningPathItemControllerMessages,
  smthWentWrong,
};