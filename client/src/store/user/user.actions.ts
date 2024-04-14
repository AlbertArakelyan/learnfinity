import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import store from 'store';

import { SIGN_UP, VERIFY_EMAIL, FORGOT_PASSWORD, RESET_PASSWORD, SIGN_IN } from './user.actionTypes';

import { UserService } from 'services';

import {
  SignUpPayloadDataType,
  SignUpActionReturnDataType,
  IVerifyEmailActionReturnData,
  IVerificationForgotPasswordData,
  IResetPasswordActionReturnData,
  IResetPasswordPayloadData,
  SignInPayloadDataType,
  ISignInActionReturnData,
} from './types';

import { smthWentWrong } from 'constants/messages';

export const signUp = createAsyncThunk<SignUpActionReturnDataType, SignUpPayloadDataType>(SIGN_UP, async (data) => {
  try {
    const response = await UserService.signUp<SignUpActionReturnDataType, SignUpPayloadDataType>(data);

    if (!response.data?.success) {
      throw new Error(response.data.message || smthWentWrong);
    }

    return response.data.data;
  } catch (error: any) {
    console.log('signUp', error);
    toast.error(error.message, {
      type: 'error',
      hideProgressBar: true,
    });
    throw error.message as string;
  }
});

export const verifyEmail = createAsyncThunk<IVerifyEmailActionReturnData, string>(VERIFY_EMAIL, async (token) => {
  try {
    const response = await UserService.verifyEmail<IVerifyEmailActionReturnData>(token);

    if (!response.data?.success) {
      throw new Error(response.data.message || smthWentWrong);
    }

    return response.data.data;
  } catch (error: any) {
    console.log('verifyEmail', error);
    toast.error(error.message, {
      type: 'error',
      hideProgressBar: true,
    });
    throw error.message as string;
  }
});

export const forgotPassword = createAsyncThunk<IVerificationForgotPasswordData, IVerificationForgotPasswordData>(
  FORGOT_PASSWORD,
  async (data) => {
    try {
      const response = await UserService.forgotPassword<
        IVerificationForgotPasswordData,
        IVerificationForgotPasswordData
      >(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || smthWentWrong);
      }

      return response.data.data;
    } catch (error: any) {
      console.log('forgotPassword', error);
      toast.error(error.message, {
        type: 'error',
        hideProgressBar: true,
      });
      throw error.message as string;
    }
  }
);

export const resetPassword = createAsyncThunk<IResetPasswordActionReturnData, IResetPasswordPayloadData>(
  RESET_PASSWORD,
  async (data) => {
    try {
      const response = await UserService.resetPassword<IResetPasswordActionReturnData, IResetPasswordPayloadData>(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || smthWentWrong);
      }

      return response.data.data;
    } catch (error: any) {
      console.log('forgotPassword', error);
      toast.error(error.message, {
        type: 'error',
        hideProgressBar: true,
      });
      throw error.message as string;
    }
  }
);

export const signIn = createAsyncThunk<ISignInActionReturnData, SignInPayloadDataType>(SIGN_IN, async (data) => {
  try {
    const response = await UserService.signIn<ISignInActionReturnData, SignInPayloadDataType>(data);

    if (!response.data?.success) {
      throw new Error(response.data.message || smthWentWrong);
    }

    store.set('accessToken', response.data.data.accessToken);

    return response.data.data;
  } catch (error: any) {
    console.log('forgotPassword', error);
    toast.error(error.message, {
      type: 'error',
      hideProgressBar: true,
    });
    throw error.message as string;
  }
});
