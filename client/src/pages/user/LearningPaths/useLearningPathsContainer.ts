import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/index';

import {
  getLearningPaths,
  setCurrentPage,
  selectIsLoadingGetLearningPaths,
  selectLists,
  selectCurrentPage,
  selectTotalPages,
} from 'store/learningPath';

import { LearningPathsRequestTypes, LearningPathsListTypes } from 'constants/learningPath';

const useLearningPathsContainer = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const isLoadingGetLearningPaths = useAppSelector(selectIsLoadingGetLearningPaths);
  const lists = useAppSelector(selectLists);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);

  const handleSetCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    if (location.pathname.includes(LearningPathsRequestTypes.public)) {
      dispatch(getLearningPaths({ learningPathsType: LearningPathsRequestTypes.public, page: currentPage }));
    } else if (location.pathname.includes(LearningPathsRequestTypes.shared)) {
      dispatch(getLearningPaths({ learningPathsType: LearningPathsRequestTypes.shared, page: currentPage }));
    } else {
      dispatch(getLearningPaths({ learningPathsType: LearningPathsRequestTypes.my, page: currentPage }));
    }
  }, [location.pathname, currentPage]);

  const learningPaths = useMemo(() => {
    if (location.pathname.includes(LearningPathsRequestTypes.public)) {
      return lists[LearningPathsListTypes.publicList];
    } else if (location.pathname.includes(LearningPathsRequestTypes.shared)) {
      return lists[LearningPathsListTypes.sharedList];
    } else {
      return lists[LearningPathsListTypes.myList];
    }
  }, [lists]);

  return {
    isLoadingGetLearningPaths,
    learningPaths,
    handleSetCurrentPage,
    currentPage,
    totalPages,
  };
};

export type UseLearningPathsContainerType = ReturnType<typeof useLearningPathsContainer>;

export default useLearningPathsContainer;
