import LearningPath from './LearningPath';

import useLearningPathContainer from './useLearningPathContainer';

const LearningPathContainer = () => {
  const {
    learningPath,
    isLoadingGetLearningPath,
    isLoadingDeleteLearningPath,
    isLearningPathDeleteModalOpen,
    handleLearningPathEditClick,
    handleDeleteLearningPathClick,
    onDeleteLearningPath,
    onCancelDeleteLearningPath,
  } = useLearningPathContainer();

  return (
    <LearningPath
      learningPath={learningPath}
      isLoadingGetLearningPath={isLoadingGetLearningPath}
      isLoadingDeleteLearningPath={isLoadingDeleteLearningPath}
      isLearningPathDeleteModalOpen={isLearningPathDeleteModalOpen}
      handleLearningPathEditClick={handleLearningPathEditClick}
      handleDeleteLearningPathClick={handleDeleteLearningPathClick}
      onDeleteLearningPath={onDeleteLearningPath}
      onCancelDeleteLearningPath={onCancelDeleteLearningPath}
    />
  );
};

export default LearningPathContainer;
