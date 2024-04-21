import { ILearningPath, ILearningPathSendData, GetLearningPathsRequestType } from 'types';
import { IPageInfo } from 'services/types';

export interface ILearningPathState {
  lists: {
    myList: ILearningPath[];
    sharedList: ILearningPath[];
    publicList: ILearningPath[];
  };
  pagination: IPageInfo;
  currentPage: number;
  entry: ILearningPath | null;
  isLoading: {
    createLearningPath: boolean;
    getLearningPaths: boolean;
  };
  error: string | null;
}

/**
 * createLearningPath Action Types
 */
export type CreateLearningPathPayloadDataType = ILearningPathSendData;

export type CreateLearningPathActionReturnDataType = ILearningPath;

/**
 * getLearningPaths Action Types
 */
export interface IGetLearningPathsPayloadData {
  learningPathsType: GetLearningPathsRequestType;
  page: number;
}

export interface IGetLearningPathsActionReturnData {
  data: ILearningPath[];
  pagination: IPageInfo;
  listType: keyof ILearningPathState['lists'];
}
