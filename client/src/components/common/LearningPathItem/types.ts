import { ReactNode, HTMLAttributes } from 'react';

import { UseLearningPathItemContainerType } from './useLearningPathItemContainer';

export interface ILearningPathItemContainerProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  description: string;
  tags: string[];
  userId: string;
}

export interface ILearningPathItemProps
  extends Omit<ILearningPathItemContainerProps, 'tags' | 'userId'>,
    UseLearningPathItemContainerType {
  tagsContent: ReactNode[];
}
