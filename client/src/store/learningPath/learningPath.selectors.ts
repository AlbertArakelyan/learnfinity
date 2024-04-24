import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configureStore';

const userState = (state: RootState) => state.learningPath;

export const selectIsLoadingCreateEditLearningPath = createSelector(
  userState,
  ({ isLoading: { createEditLearningPath } }) => createEditLearningPath
);

export const selectIsLoadingGetLearningPaths = createSelector(
  userState,
  ({ isLoading: { getLearningPaths } }) => getLearningPaths
);

export const selectIsLoadingGetLearningPath = createSelector(
  userState,
  ({ isLoading: { getLearningPath } }) => getLearningPath
);

export const selectLists = createSelector(userState, ({ lists }) => lists);

export const selectCurrentPage = createSelector(userState, ({ currentPage }) => currentPage);

export const selectTotalPages = createSelector(userState, ({ pagination }) => pagination.totalPages);

export const selectEntry = createSelector(userState, ({ entry }) => entry);

export const selectEntryItems = createSelector(userState, ({ entryItems }) => entryItems);
