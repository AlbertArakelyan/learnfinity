import LearningPath from './LearningPath';

import useLearningPathContainer from './useLearningPathContainer';

const LearningPathContainer = () => {
  const { learningPath, isLoadingGetLearningPath } = useLearningPathContainer();

  return <LearningPath learningPath={learningPath} isLoadingGetLearningPath={isLoadingGetLearningPath} />;
};

export default LearningPathContainer;
