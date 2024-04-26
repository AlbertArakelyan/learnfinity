import { IUser, IUserSignUpData, IUserResetPasswordData, IUserSignInData, INameData } from 'types';

export interface IVerificationForgotPasswordData {
  email: string;
}

export interface IUserState {
  user: IUser | null;
  accessToken: string | null;
  verificationData: IVerificationForgotPasswordData | null;
  isVerificationPassed: boolean | null;
  forgotPasswordData: IVerificationForgotPasswordData | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * signUp Action Types
 */
export type SignUpPayloadDataType = IUserSignUpData;

export type SignUpActionReturnDataType = IVerificationForgotPasswordData;

/**
 * verifyEmail Action Types
 */
export interface IVerifyEmailActionReturnData {
  token: string;
  isEmailVerified: boolean;
}

/**
 * resetPassword Action Types
 */
export interface IResetPasswordPayloadData extends IUserResetPasswordData {
  resetToken: string;
}

export interface IResetPasswordActionReturnData {
  isPasswordReset: boolean;
}

/**
 * signIn Action Types
 */
export type SignInPayloadDataType = IUserSignInData;

export interface ISignInActionReturnData {
  user: IUser;
  accessToken: string;
}

/**
 * getUser Action Types
 */
export type GetUserActionReturnData = IUser;

/**
 * editUser Action Types
 */
export type EditUserPayloadDataType = Partial<IUser>;

export type EditUserActionReturnDataType = IUser;

/**
 * changeAvatar Action Types
 */
export interface IChangeAvatarPayloadData {
  image: string;
}

export interface IChangeAvatarActionReturnData {
  photoUrl: string;
}
