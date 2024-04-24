import LearningPath from './LearningPath';

import useLearningPathContainer from './useLearningPathContainer';

const LearningPathContainer = () => {
  const { learningPath, isLoadingGetLearningPath, handleLearningPathEditClick } = useLearningPathContainer();

  return (
    <LearningPath
      learningPath={learningPath}
      isLoadingGetLearningPath={isLoadingGetLearningPath}
      handleLearningPathEditClick={handleLearningPathEditClick}
    />
  );
};

export default LearningPathContainer;
