import LearningPaths from './LearningPaths';

import { LearningPathItem } from 'components';

import useLearningPathsContainer from './useLearningPathsContainer';

const LearningPathsContainer = () => {
  const { learningPaths, isLoadingGetLearningPaths, handleSetCurrentPage, currentPage, totalPages } =
    useLearningPathsContainer();

  const learningPathsContent = learningPaths.map((learningPath) => {
    return (
      <LearningPathItem
        key={learningPath._id}
        name={learningPath.name}
        description={learningPath.description}
        tags={learningPath.tags}
        id={learningPath._id}
        userId={learningPath.userId}
      />
    );
  });

  return (
    <LearningPaths
      learningPathsContent={learningPathsContent}
      isLoadingGetLearningPaths={isLoadingGetLearningPaths}
      handleSetCurrentPage={handleSetCurrentPage}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

export default LearningPathsContainer;
