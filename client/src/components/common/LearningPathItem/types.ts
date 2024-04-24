import { ReactNode, HTMLAttributes } from 'react';

import { UseLearningPathItemContainerType } from './useLearningPathItemContainer';

export interface ILearningPathItemContainerProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

export interface ILearningPathItemProps
  extends Omit<ILearningPathItemContainerProps, 'tags'>,
    UseLearningPathItemContainerType {
  tagsContent: ReactNode[];
}
