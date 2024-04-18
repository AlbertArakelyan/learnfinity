import AuthService from './AuthService';

import { request } from 'utils';

import { IResponseData } from './types';

class UserService extends AuthService {
  static getUser<T>() {
    return request<IResponseData<T>>('GET', 'users/');
  }
}

export default UserService;
