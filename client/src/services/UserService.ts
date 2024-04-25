import AuthService from './AuthService';

import { request } from 'utils';

import { IResponseData } from './types';

class UserService extends AuthService {
  static getUser<T>() {
    return request<IResponseData<T>>('GET', 'users/');
  }

  static editUser<T, D>(data: D) {
    return request<IResponseData<T>, D>('PATCH', 'users/edit', data);
  }
}

export default UserService;
