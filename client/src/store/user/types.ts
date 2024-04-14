import { IUser, IUserSignUpData } from 'types';

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
