import { ILearningPath, ILearningPathSendData } from 'types';

export interface ILearningPathState {
  list: ILearningPath[];
  entry: ILearningPath | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * createLearningPath Action Types
 */
export type CreateLearningPathPayloadDataType = ILearningPathSendData;

export type CreateLearningPathActionReturnDataType = ILearningPath;
