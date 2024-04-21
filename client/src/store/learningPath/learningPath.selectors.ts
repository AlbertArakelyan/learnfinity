import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configureStore';

const userState = (state: RootState) => state.learningPath;

export const selectIsLoading = createSelector(userState, ({ isLoading }) => isLoading);
