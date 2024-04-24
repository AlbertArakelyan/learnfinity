import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/index';

import {
  getUserLearningPath,
  deleteUserLearningPath,
  resetLearningPath,
  selectEntry,
  selectIsLoadingGetLearningPath,
  selectIsLoadingDeleteLearningPath,
} from 'store/learningPath';

import { useQuery } from 'hooks';

import { Queries, ModalQueryStates } from 'constants/global';

const useLearningPathContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const query = useQuery();

  const { learningPathId } = useParams();

  const learningPath = useAppSelector(selectEntry);
  const isLoadingGetLearningPath = useAppSelector(selectIsLoadingGetLearningPath);
  const isLoadingDeleteLearningPath = useAppSelector(selectIsLoadingDeleteLearningPath);

  const isLearningPathDeleteModalOpen = query.get(Queries.deleteLearningPathId) === learningPathId;
  const isAddEditLearningPathItemModalOpen = query.get(Queries.addEditLearningPathItem) === ModalQueryStates.true;

  const handleLearningPathEditClick = () => {
    if (learningPathId) {
      navigate({
        search: `?${Queries.addEditLearningPath}=${ModalQueryStates.true}&${Queries.editLearningPathId}=${learningPathId}`,
      });
    }
  };

  const handleDeleteLearningPathClick = () => {
    if (learningPathId) {
      navigate({
        search: `?${Queries.deleteLearningPathId}=${learningPathId}`,
      });
    }
  };

  const onDeleteLearningPath = () => {
    if (learningPathId) {
      dispatch(deleteUserLearningPath(learningPathId)).then((res: any) => {
        if (!res.error) {
          navigate('/learning-paths');
          dispatch(resetLearningPath());
        }
      });
    }
  };

  const onCancelDeleteLearningPath = () => {
    navigate({ search: '' });
  };

  const handleAddItemClick = () => {
    if (learningPathId) {
      navigate({
        search: `?${Queries.addEditLearningPathItem}=${ModalQueryStates.true}`,
      });
    }
  };

  const handleAddItemModalClose = () => {
    navigate({ search: '' });
  };

  useEffect(() => {
    if (learningPathId) {
      dispatch(getUserLearningPath(learningPathId));
    }
  }, []);

  return {
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
  };
};

export type UseLearningPathContainerType = ReturnType<typeof useLearningPathContainer>;

export default useLearningPathContainer;
