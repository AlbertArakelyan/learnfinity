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
  canEditOrDeleteLearningPathItem,
}) => {
  const {
    handleLearningLearningPathItemEditClick,
    handleLearningLearningPathItemDeleteClick,
    isLearningPathRelatedItemDeleteModalOpen,
    onCancelDeleteLearningPathItem,
    onDeleteLearningPathItem,
    isLoadingDeleteLearningPathItem,
  } = useLearningPathRelatedItemContainer(id);

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
      handleLearningLearningPathItemDeleteClick={handleLearningLearningPathItemDeleteClick}
      isLearningPathRelatedItemDeleteModalOpen={isLearningPathRelatedItemDeleteModalOpen}
      onCancelDeleteLearningPathItem={onCancelDeleteLearningPathItem}
      onDeleteLearningPathItem={onDeleteLearningPathItem}
      isLoadingDeleteLearningPathItem={isLoadingDeleteLearningPathItem}
      canEditOrDeleteLearningPathItem={canEditOrDeleteLearningPathItem}
    />
  );
};

export default LearningPathRelatedItemContainer;
