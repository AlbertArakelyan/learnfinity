import { HTMLAttributes } from 'react';

export interface ILearningPathItemContainerProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  description: string;
}

export type ILearningPathItemProps = ILearningPathItemContainerProps;
