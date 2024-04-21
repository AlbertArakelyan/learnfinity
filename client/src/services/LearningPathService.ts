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
}

export default LearningPathService;
