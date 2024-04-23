import { LearningPathsRequestTypes } from 'constants/learningPath';

export interface ILearningPathCreateData {
  name: string;
  description: string;
  isPrivate: boolean;
  tags: string[];
}

export interface ILearningPath {
  _id: string;
  name: string;
  description: string;
  isPrivate: boolean;
  isCreatedInGroup: boolean;
  userId: string;
  groupId: string | null;
  tags: string[];
  sharedUserIds: string[];
  created_at: Date;
  updated_at: Date;
}

export type ILearningPathWithoutId = Omit<ILearningPath, '_id'>;

export type ILearningPathSendData = Omit<ILearningPathWithoutId, 'userId' | 'created_at' | 'updated_at'>;

export type GetLearningPathsRequestType = keyof typeof LearningPathsRequestTypes;

export interface ILearningPathItem {
  _id: string;
  name: string;
  description: string;
  instructions: string;
  type: string;
  sourceUrl: string;
  userId: string;
  learningPathId: string;
  created_at: Date;
  updated_at: Date;
}
