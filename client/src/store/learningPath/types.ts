import { ILearningPath, ILearningPathSendData } from 'types';

export interface ILearningPathState {
  lists: {
    myList: ILearningPath[];
    sharedList: ILearningPath[];
    publicList: ILearningPath[];
  };
  entry: ILearningPath | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * createLearningPath Action Types
 */
export type CreateLearningPathPayloadDataType = ILearningPathSendData;

export type CreateLearningPathActionReturnDataType = ILearningPath;
