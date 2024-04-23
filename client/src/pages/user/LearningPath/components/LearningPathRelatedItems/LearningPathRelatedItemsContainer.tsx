import LearningPathRelatedItems from './LearningPathRelatedItems';

import { LearningPathRelatedItem } from './components';

import useLearningPathRelatedItemsContainer from './useLearningPathRelatedItemsContainer';

const LearningPathRelatedItemsContainer = () => {
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
      />
    );
  });

  return <LearningPathRelatedItems learningPathRelatedItemsContent={learningPathRelatedItemsContent} />;
};

export default LearningPathRelatedItemsContainer;
