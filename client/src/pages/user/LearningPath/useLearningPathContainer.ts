import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/index';

import { getUserLearningPath, selectEntry, selectIsLoadingGetLearningPath } from 'store/learningPath';

const useLearningPathContainer = () => {
  const { learningPathId } = useParams();
  const dispatch = useAppDispatch();

  const learningPath = useAppSelector(selectEntry);
  const isLoadingGetLearningPath = useAppSelector(selectIsLoadingGetLearningPath);

  useEffect(() => {
    if (learningPathId) {
      dispatch(getUserLearningPath(learningPathId));
    }
  }, []);

  return {
    learningPath,
    isLoadingGetLearningPath,
  };
};

export type UseLearningPathContainerType = ReturnType<typeof useLearningPathContainer>;

export default useLearningPathContainer;
