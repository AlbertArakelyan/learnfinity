import { request } from 'utils';

import { IResponseData } from './types';

class LearningPathService {
  static createLearningPath<T, D>(data: D) {
    return request<IResponseData<T>, D>('POST', 'learning-paths/', data);
  }
}

export default LearningPathService;
