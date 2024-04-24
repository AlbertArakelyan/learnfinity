import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/index';

import { setLearningPath, selectEntry } from 'store/learningPath';

import { Queries, ModalQueryStates } from 'constants/global';

const useLearningPathItemContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const learningPath = useAppSelector(selectEntry);

  const handleLearningPathClick = (learningPathId: string) => {
    navigate(`/learning-paths/${learningPathId}`);
  };

  const handleEditLearningPathClick = (learningPathId: string) => {
    if (!learningPath) {
      dispatch(setLearningPath(learningPathId));
    }

    navigate({
      search: `${Queries.addEditLearningPath}=${ModalQueryStates.true}&${Queries.editLearningPathId}=${learningPathId}`,
    });
  };

  return {
    handleLearningPathClick,
    handleEditLearningPathClick,
  };
};

export type UseLearningPathItemContainerType = ReturnType<typeof useLearningPathItemContainer>;

export default useLearningPathItemContainer;
