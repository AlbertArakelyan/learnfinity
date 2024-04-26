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

  static changeAvatar<T, D>(data: D) {
    return request<IResponseData<T>, D>('PATCH', 'users/change-avatar', data);
  }

  static changePassword<T, D>(data: D) {
    return request<IResponseData<T>, D>('PATCH', 'users/change-password', data);
  }
}

export default UserService;
