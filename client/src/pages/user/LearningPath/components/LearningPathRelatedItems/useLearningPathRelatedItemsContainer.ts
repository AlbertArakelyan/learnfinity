import { useAppSelector } from 'store/index';

import { selectEntryItems } from 'store/learningPath';

const useLearningPathRelatedItemsContainer = () => {
  const learningPathItems = useAppSelector(selectEntryItems);

  return { learningPathItems };
};

export type UseLearningPathRelatedItemsContainerType = ReturnType<typeof useLearningPathRelatedItemsContainer>;

export default useLearningPathRelatedItemsContainer;
