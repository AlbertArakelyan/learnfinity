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

interface IPageInfo {
  page: string;
  limit: string;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: string;
  prevPage: number;
  lastPage: number;
  nextPageUrl: string;
  prevPageUrl: string;
}
