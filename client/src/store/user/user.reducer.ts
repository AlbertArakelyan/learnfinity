import { createReducer } from '@reduxjs/toolkit';
import store from 'store';

import { signUp, verifyEmail } from './user.actions';

import { IUserState } from './types';

const initialState: IUserState = {
  user: null,
  accessToken: store.get('accessToken'),
  verificationData: null,
  isVerificationPassed: null,
  isLoading: false,
  error: null,
};

const userReducer = createReducer(initialState, (buider) => {
  buider
    // signUp
    .addCase(signUp.fulfilled, (state, action) => {
      state.verificationData = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message as string;
    })

    // verifyEmail
    .addCase(verifyEmail.fulfilled, (state, action) => {
      state.isVerificationPassed = action.payload.isEmailVerified;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(verifyEmail.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(verifyEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message as string;
    })

    .addDefaultCase((state) => state);
});

export default userReducer;
