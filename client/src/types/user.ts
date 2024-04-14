export interface IUserSignInData {
  email: string;
  password: string;
}

export interface IUserSignUpData extends IUserSignInData {
  fullName: string;
  confirmPassword: string;
}

export interface IUserForgotPasswordData {
  email: string;
}

export interface IUser {
  id: string;
  email: string;
  fullName: string;
  photoUrl: null | string;
}
