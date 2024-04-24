import { request } from 'utils';

import { IResponseData, IResponsePaginatedData } from './types';
import { GetLearningPathsRequestType } from 'types';

class LearningPathService {
  static createLearningPath<T, D>(data: D) {
    return request<IResponseData<T>, D>('POST', 'learning-paths/', data);
  }

  static getLearningPaths<T>(type: GetLearningPathsRequestType, page = 1, limit = 9) {
    const GetLearningPathsRequestType = type === 'my' ? '' : type;

    return request<IResponsePaginatedData<T>>(
      'GET',
      `learning-paths/${GetLearningPathsRequestType}?page=${page}&limit=${limit}`
    );
  }

  static getUserLearningPath<T>(learningPathId: string) {
    return request<IResponseData<T>>('GET', `learning-paths/${learningPathId}`);
  }

  static getUserLearningPathItems<T>(learningPathId: string) {
    return request<IResponseData<T>>('GET', `learning-path-items/${learningPathId}`);
  }

  static updateUserLearningPath<T, D>(learningPathId: string, data: D) {
    return request<IResponseData<T>, D>('PATCH', `learning-paths/${learningPathId}`, data);
  }
}

export default LearningPathService;
