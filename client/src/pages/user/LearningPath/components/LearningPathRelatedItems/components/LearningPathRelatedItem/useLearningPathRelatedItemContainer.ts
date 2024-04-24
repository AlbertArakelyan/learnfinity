import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/index';

import { setEditingLearningPathItem } from 'store/learningPath';

import { Queries, ModalQueryStates } from 'constants/global';

const useLearningPathRelatedItemContainer = (learningPathItemId: string) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { learningPathId } = useParams();

  const handleLearningLearningPathItemEditClick = () => {
    if (learningPathId) {
      dispatch(setEditingLearningPathItem(learningPathItemId));

      navigate({
        search: `?${Queries.addEditLearningPathItem}=${ModalQueryStates.true}&${Queries.editLearningPathItemId}=${learningPathItemId}`,
      });
    }
  };

  return {
    handleLearningLearningPathItemEditClick,
  };
};

export type UseLearningPathRelatedItemContainerType = ReturnType<typeof useLearningPathRelatedItemContainer>;

export default useLearningPathRelatedItemContainer;
