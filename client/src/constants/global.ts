import { IPageInfo } from 'services/types';

export enum ModalQueryStates {
  true = 'true',
  false = 'false',
}

export enum Queries {
  addLearningPath = 'addLearningPath',
}

export const initialPagination: IPageInfo = {
  page: 1,
  limit: 10,
  totalPages: 1,
  prevPage: 0,
  nextPage: 2,
  hasNextPage: false,
  hasPrevPage: false,
  lastPage: 1,
  totalItems: 0,
  nextPageUrl: '/api/groups?page=11&limit=10',
  prevPageUrl: '/api/groups?page=0&limit=10',
};
