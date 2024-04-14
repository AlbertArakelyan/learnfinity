import { request } from 'utils';

import { IResponseData } from './types';

class AuthService {
  static signUp<T, D>(data: D) {
    return request<IResponseData<T>, D>('POST', 'users/sign-up', data);
  }

  static verifyEmail<T>(token: string) {
    return request<IResponseData<T>>('POST', `users/verify-email/${token}`);
  }

  static forgotPassword<T, D>(data: D) {
    return request<IResponseData<T>, D>('POST', 'users/forgot-password', data);
  }

  static resetPassword<T, D>(data: D) {
    return request<IResponseData<T>, D>('POST', 'users/reset-password', data);
  }

  // static signIn<T, D>(data: D) {
  //   return request<T, D>();
  // }
}

export default AuthService;
