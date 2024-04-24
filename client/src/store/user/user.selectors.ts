import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configureStore';

const userState = (state: RootState) => state.user;

export const selectIsLoading = createSelector(userState, ({ isLoading }) => isLoading);
export const selectVerificationData = createSelector(userState, ({ verificationData }) => verificationData);
export const selectIsVerificationPassed = createSelector(userState, ({ isVerificationPassed }) => isVerificationPassed);
export const selectForgotPasswordData = createSelector(userState, ({ forgotPasswordData }) => forgotPasswordData);
export const selectAccessToken = createSelector(userState, ({ accessToken }) => accessToken);
export const selectUser = createSelector(userState, ({ user }) => user);
export const selectUserId = createSelector(userState, ({ user }) => user?.id);
