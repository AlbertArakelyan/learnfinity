import { FC } from 'react';

import LearningPathItem from './LearningPathItem';

import { ILearningPathItemContainerProps } from './types';

const LearningPathItemContainer: FC<ILearningPathItemContainerProps> = ({ name, description, id }) => {
  return <LearningPathItem name={name} description={description} id={id} />;
};

export default LearningPathItemContainer;
