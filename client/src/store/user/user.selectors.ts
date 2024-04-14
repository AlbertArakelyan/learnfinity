import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configureStore';

const userState = (state: RootState) => state.user;

export const selectIsLoading = createSelector(userState, ({ isLoading }) => isLoading);
export const selectVerificationData = createSelector(userState, ({ verificationData }) => verificationData);
