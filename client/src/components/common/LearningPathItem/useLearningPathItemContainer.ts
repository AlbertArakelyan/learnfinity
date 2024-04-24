import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/index';

import {
  deleteUserLearningPath,
  setLearningPath,
  selectEntry,
  selectIsLoadingDeleteLearningPath,
} from 'store/learningPath';

import { useQuery } from 'hooks';

import { Queries, ModalQueryStates } from 'constants/global';

const useLearningPathItemContainer = (learningPathId: string) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const query = useQuery();

  const learningPath = useAppSelector(selectEntry);
  const isDeleteLearningPathModalOpen = query.get(Queries.deleteLearningPathId) === learningPathId;
  const isLoadingDeleteLearningPath = useAppSelector(selectIsLoadingDeleteLearningPath);

  const handleLearningPathClick = (learningPathId: string) => {
    navigate(`/learning-paths/${learningPathId}`);
  };

  const handleEditLearningPathClick = (learningPathId: string) => {
    // TODO remove learningPathId from argument
    if (!learningPath) {
      dispatch(setLearningPath(learningPathId));
    }

    navigate({
      search: `${Queries.addEditLearningPath}=${ModalQueryStates.true}&${Queries.editLearningPathId}=${learningPathId}`,
    });
  };

  const handleDeleteLearningPathClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    navigate({
      search: `${Queries.deleteLearningPathId}=${learningPathId}`,
    });
  };

  const onDeleteLearningPath = () => {
    dispatch(deleteUserLearningPath(learningPathId)).then((res: any) => {
      if (!res.error) {
        navigate({ search: '' });
      }
    });
  };

  const onCancelDeleteLearningPath = () => {
    navigate({ search: '' });
  };

  return {
    handleLearningPathClick,
    handleEditLearningPathClick,
    handleDeleteLearningPathClick,
    isDeleteLearningPathModalOpen,
    isLoadingDeleteLearningPath,
    onDeleteLearningPath,
    onCancelDeleteLearningPath,
  };
};

export type UseLearningPathItemContainerType = ReturnType<typeof useLearningPathItemContainer>;

export default useLearningPathItemContainer;