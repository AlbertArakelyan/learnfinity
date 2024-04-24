import {
  ILearningPath,
  ILearningPathSendData,
  GetLearningPathsRequestType,
  ILearningPathItem,
  ILearningPathItemData,
} from 'types';
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
  editingLearningPathItem: ILearningPathItem | null;
  isLoading: {
    createEditLearningPath: boolean;
    getLearningPaths: boolean;
    getLearningPath: boolean;
    deleteLearningPath: boolean;
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

/**
 * editLearningPath Action Types
 */
export interface IEditLearningPathPayloadData {
  id: string;
  data: ILearningPathSendData;
}

export type EditLearningPathActionReturnDataType = ILearningPath;

/**
 * deleteLearningPath Action Types
 */
export interface IDeleteLearningPathPayloadData {
  acknowledged: boolean;
  deletedCount: number;
  id: string;
  isDeleted: boolean;
}

/**
 * createUserLearningPathItem Action Types
 */
export type CreateUserLearningPathItemReturnDataType = ILearningPathItem;

export interface ICreateUserLearningPathItemPayloadData {
  learningPathId: string;
  data: ILearningPathItemData;
}

/**
 * editUserLearningPathItem Action Types
 */
export type EditUserLearningPathItemReturnDataType = ILearningPathItem;

export interface IEditUserLearningPathItemPayloadData {
  learningPathId: string;
  learningPathItemId: string;
  learningPathItemData: ILearningPathItemData;
}
