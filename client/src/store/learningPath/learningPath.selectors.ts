import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configureStore';

const userState = (state: RootState) => state.learningPath;

export const selectIsLoadingCreateLearningPath = createSelector(
  userState,
  ({ isLoading: { createLearningPath } }) => createLearningPath
);

export const selectIsLoadingGetLearningPaths = createSelector(
  userState,
  ({ isLoading: { getLearningPaths } }) => getLearningPaths
);

export const selectLists = createSelector(userState, ({ lists }) => lists);

export const selectCurrentPage = createSelector(userState, ({ currentPage }) => currentPage);

export const selectTotalPages = createSelector(userState, ({ pagination }) => pagination.totalPages);
