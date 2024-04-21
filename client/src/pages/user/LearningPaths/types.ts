import { ReactNode } from 'react';

import { UseLearningPathsContainerType } from './useLearningPathsContainer';

export interface ILearningPathsProps extends Omit<UseLearningPathsContainerType, 'learningPaths'> {
  learningPathsContent: ReactNode[];
}
