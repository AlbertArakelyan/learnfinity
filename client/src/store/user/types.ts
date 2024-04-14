import { IUser, IUserSignUpData } from 'types';

interface IVerificationForgotPasswordData {
  email: string;
}

export interface IUserState {
  user: IUser | null;
  accessToken: string | null;
  verificationData: IVerificationForgotPasswordData | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * signUp Action Types
 */
export type SignUpPayloadDataType = IUserSignUpData;

export type SignUpActionReturnDataType = IVerificationForgotPasswordData;
