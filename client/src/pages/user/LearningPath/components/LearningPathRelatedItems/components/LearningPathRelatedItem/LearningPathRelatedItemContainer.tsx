import { FC } from 'react';

import LearningPathRelatedItem from './LearningPathRelatedItem';

import useLearningPathRelatedItemContainer from './useLearningPathRelatedItemContainer';

import { ILearningPathRelatedItemContainerProps } from './types';

const LearningPathRelatedItemContainer: FC<ILearningPathRelatedItemContainerProps> = ({
  id,
  name,
  description,
  instructions,
  type,
  sourceUrl,
  number,
}) => {
  const { handleLearningLearningPathItemEditClick } = useLearningPathRelatedItemContainer(id);

  return (
    <LearningPathRelatedItem
      id={id}
      name={name}
      description={description}
      instructions={instructions}
      type={type}
      sourceUrl={sourceUrl}
      number={number}
      handleLearningLearningPathItemEditClick={handleLearningLearningPathItemEditClick}
    />
  );
};

export default LearningPathRelatedItemContainer;
