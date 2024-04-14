import { request } from 'utils';

import { IResponseData } from './types';

class AuthService {
  static signUp<T, D>(data: D) {
    return request<IResponseData<T>, D>('POST', '/users/sign-up', data);
  }

  // static signIn<T, D>(data: D) {
  //   return request<T, D>();
  // }
}

export default AuthService;
