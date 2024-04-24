import LearningPath from './LearningPath';

import useLearningPathContainer from './useLearningPathContainer';

const LearningPathContainer = () => {
  const {
    learningPath,
    isLoadingGetLearningPath,
    isLoadingDeleteLearningPath,
    isLearningPathDeleteModalOpen,
    isAddEditLearningPathItemModalOpen,
    handleLearningPathEditClick,
    handleDeleteLearningPathClick,
    onDeleteLearningPath,
    onCancelDeleteLearningPath,
    handleAddItemClick,
    handleAddItemModalClose,
    canEditOrDeleteLearningPath,
  } = useLearningPathContainer();

  return (
    <LearningPath
      learningPath={learningPath}
      isLoadingGetLearningPath={isLoadingGetLearningPath}
      isLoadingDeleteLearningPath={isLoadingDeleteLearningPath}
      isLearningPathDeleteModalOpen={isLearningPathDeleteModalOpen}
      isAddEditLearningPathItemModalOpen={isAddEditLearningPathItemModalOpen}
      handleLearningPathEditClick={handleLearningPathEditClick}
      handleDeleteLearningPathClick={handleDeleteLearningPathClick}
      onDeleteLearningPath={onDeleteLearningPath}
      onCancelDeleteLearningPath={onCancelDeleteLearningPath}
      handleAddItemClick={handleAddItemClick}
      handleAddItemModalClose={handleAddItemModalClose}
      canEditOrDeleteLearningPath={canEditOrDeleteLearningPath}
    />
  );
};

export default LearningPathContainer;
