export interface IResponseData<T = any> {
  data: T;
  success: boolean;
  message: string;
  statusCode: number;
}

export interface IResponsePaginatedData<T = any> {
  data: IPaginatedData<T>;
  success: boolean;
  message: string;
  statusCode: number;
}

interface IPaginatedData<T> {
  data: T;
  pageInfo: IPageInfo;
}

export interface IPageInfo {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number;
  prevPage: number;
  lastPage: number;
  nextPageUrl: string;
  prevPageUrl: string;
}
