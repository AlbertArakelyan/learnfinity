import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/index';

import {
  deleteUserLearningPathItem,
  setEditingLearningPathItem,
  selectIsLoadingDeleteLearningPathItem,
} from 'store/learningPath';

import { useQuery } from 'hooks';

import { Queries, ModalQueryStates } from 'constants/global';

const useLearningPathRelatedItemContainer = (learningPathItemId: string) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const query = useQuery();

  const { learningPathId } = useParams();

  const isLoadingDeleteLearningPathItem = useAppSelector(selectIsLoadingDeleteLearningPathItem);

  const isLearningPathRelatedItemDeleteModalOpen = query.get(Queries.deleteLearningPathItemId) === learningPathItemId;

  const handleLearningLearningPathItemEditClick = () => {
    if (learningPathId) {
      dispatch(setEditingLearningPathItem(learningPathItemId));

      navigate({
        search: `?${Queries.addEditLearningPathItem}=${ModalQueryStates.true}&${Queries.editLearningPathItemId}=${learningPathItemId}`,
      });
    }
  };

  const handleLearningLearningPathItemDeleteClick = () => {
    if (learningPathId) {
      navigate({
        search: `?${Queries.deleteLearningPathItemId}=${learningPathItemId}`,
      });
    }
  };

  const onDeleteLearningPathItem = () => {
    if (learningPathId) {
      dispatch(
        deleteUserLearningPathItem({
          learningPathId,
          learningPathItemId,
        })
      ).then((res: any) => {
        if (!res.error) {
          navigate({
            search: '',
          });
        }
      });
    }
  };

  const onCancelDeleteLearningPathItem = () => {
    navigate({
      search: '',
    });
  };

  return {
    handleLearningLearningPathItemEditClick,
    handleLearningLearningPathItemDeleteClick,
    isLearningPathRelatedItemDeleteModalOpen,
    onCancelDeleteLearningPathItem,
    onDeleteLearningPathItem,
    isLoadingDeleteLearningPathItem,
  };
};

export type UseLearningPathRelatedItemContainerType = ReturnType<typeof useLearningPathRelatedItemContainer>;

export default useLearningPathRelatedItemContainer;
