import { ILearningPathItem } from 'types';

export interface ILearningPathRelatedItemProps {
  id: ILearningPathItem['_id'];
  name: ILearningPathItem['name'];
  description: ILearningPathItem['description'];
  instructions: ILearningPathItem['instructions'];
  type: ILearningPathItem['type'];
  sourceUrl: ILearningPathItem['sourceUrl'];
  number: number;
}
