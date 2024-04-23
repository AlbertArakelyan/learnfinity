import { ReactNode, HTMLAttributes } from 'react';

export interface ILearningPathItemContainerProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

export interface ILearningPathItemProps extends Omit<ILearningPathItemContainerProps, 'tags'> {
  tagsContent: ReactNode[];
}
