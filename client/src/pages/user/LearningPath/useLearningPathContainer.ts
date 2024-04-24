import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/index';

import { getUserLearningPath, selectEntry, selectIsLoadingGetLearningPath } from 'store/learningPath';

import { Queries, ModalQueryStates } from 'constants/global';

const useLearningPathContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { learningPathId } = useParams();

  const learningPath = useAppSelector(selectEntry);
  const isLoadingGetLearningPath = useAppSelector(selectIsLoadingGetLearningPath);

  const handleLearningPathEditClick = () => {
    if (learningPathId) {
      navigate({
        search: `?${Queries.addEditLearningPath}=${ModalQueryStates.true}&${Queries.editLearningPathId}=${learningPathId}`,
      });
    }
  };

  useEffect(() => {
    if (learningPathId) {
      dispatch(getUserLearningPath(learningPathId));
    }
  }, []);

  return {
    learningPath,
    isLoadingGetLearningPath,
    handleLearningPathEditClick,
  };
};

export type UseLearningPathContainerType = ReturnType<typeof useLearningPathContainer>;

export default useLearningPathContainer;
