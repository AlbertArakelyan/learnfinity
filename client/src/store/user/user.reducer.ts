import { createReducer } from '@reduxjs/toolkit';
import store from 'store';

import { signUp, verifyEmail, forgotPassword, signIn, getUser, editUser, changeAvatar } from './user.actions';

import { IUserState } from './types';

const initialState: IUserState = {
  user: null,
  accessToken: store.get('accessToken'),
  verificationData: null,
  isVerificationPassed: null,
  forgotPasswordData: null,
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

    // forgotPassword
    .addCase(forgotPassword.fulfilled, (state, action) => {
      state.forgotPasswordData = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(forgotPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message as string;
    })

    // signIn
    .addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message as string;
    })

    // getUser
    .addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(getUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message as string;
    })

    // editUser
    .addCase(editUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(editUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(editUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message as string;
    })

    // changeAvatar
    .addCase(changeAvatar.fulfilled, (state, action) => {
      if (state.user) {
        state.user.photoUrl = action.payload.photoUrl;
      }

      state.isLoading = false;
      state.error = null;
    })
    .addCase(changeAvatar.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(changeAvatar.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message as string;
    })

    .addDefaultCase((state) => state);
});

export default userReducer;
