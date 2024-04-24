import LearningPath from './LearningPath';

import useLearningPathContainer from './useLearningPathContainer';

const LearningPathContainer = () => {
  const {
    learningPath,
    isLoadingGetLearningPath,
    isLoadingDeleteLearningPath,
    isLearningPathDeleteModalOpen,
    isAddLearningPathItemModalOpen,
    handleLearningPathEditClick,
    handleDeleteLearningPathClick,
    onDeleteLearningPath,
    onCancelDeleteLearningPath,
    handleAddItemClick,
    handleAddItemModalClose,
  } = useLearningPathContainer();

  return (
    <LearningPath
      learningPath={learningPath}
      isLoadingGetLearningPath={isLoadingGetLearningPath}
      isLoadingDeleteLearningPath={isLoadingDeleteLearningPath}
      isLearningPathDeleteModalOpen={isLearningPathDeleteModalOpen}
      isAddLearningPathItemModalOpen={isAddLearningPathItemModalOpen}
      handleLearningPathEditClick={handleLearningPathEditClick}
      handleDeleteLearningPathClick={handleDeleteLearningPathClick}
      onDeleteLearningPath={onDeleteLearningPath}
      onCancelDeleteLearningPath={onCancelDeleteLearningPath}
      handleAddItemClick={handleAddItemClick}
      handleAddItemModalClose={handleAddItemModalClose}
    />
  );
};

export default LearningPathContainer;
