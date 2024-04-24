import { FC } from 'react';

import LearningPathRelatedItems from './LearningPathRelatedItems';

import { LearningPathRelatedItem } from './components';

import { ILearningPathRelatedItemsContainerProps } from './types';

import useLearningPathRelatedItemsContainer from './useLearningPathRelatedItemsContainer';

const LearningPathRelatedItemsContainer: FC<ILearningPathRelatedItemsContainerProps> = ({
  canEditOrDeleteLearningPathItem,
}) => {
  const { learningPathItems } = useLearningPathRelatedItemsContainer();

  const learningPathRelatedItemsContent = learningPathItems.map((learningPathItem, index) => {
    return (
      <LearningPathRelatedItem
        key={learningPathItem._id}
        id={learningPathItem._id}
        name={learningPathItem.name}
        description={learningPathItem.description}
        instructions={learningPathItem.instructions}
        type={learningPathItem.type}
        sourceUrl={learningPathItem.sourceUrl}
        number={index + 1}
        canEditOrDeleteLearningPathItem={canEditOrDeleteLearningPathItem}
      />
    );
  });

  return <LearningPathRelatedItems learningPathRelatedItemsContent={learningPathRelatedItemsContent} />;
};

export default LearningPathRelatedItemsContainer;
