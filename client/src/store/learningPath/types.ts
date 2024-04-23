import { ILearningPath, ILearningPathSendData, GetLearningPathsRequestType, ILearningPathItem } from 'types';
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
  entryItems: ILearningPathItem[]; // learningPathItems
  isLoading: {
    createLearningPath: boolean;
    getLearningPaths: boolean;
    getLearningPath: boolean;
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

/**
 * getLearningPath Action Types
 */
export interface IGetLearningPathActionReturnData {
  learningPath: ILearningPath;
  learningPathItems: ILearningPathItem[];
}
