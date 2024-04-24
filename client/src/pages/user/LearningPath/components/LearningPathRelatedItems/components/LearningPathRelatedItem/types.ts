import { ILearningPathItem } from 'types';

import { UseLearningPathRelatedItemContainerType } from './useLearningPathRelatedItemContainer';

export interface ILearningPathRelatedItemContainerProps {
  id: ILearningPathItem['_id'];
  name: ILearningPathItem['name'];
  description: ILearningPathItem['description'];
  instructions: ILearningPathItem['instructions'];
  type: ILearningPathItem['type'];
  sourceUrl: ILearningPathItem['sourceUrl'];
  number: number;
  canEditOrDeleteLearningPathItem: boolean;
}

export interface ILearningPathRelatedItemProps
  extends ILearningPathRelatedItemContainerProps,
    UseLearningPathRelatedItemContainerType {}
