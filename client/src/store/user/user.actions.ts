import { createAsyncThunk } from '@reduxjs/toolkit';
import store from 'store';

import { SIGN_UP, VERIFY_EMAIL } from './user.actionTypes';

import { UserService } from 'services';

import { SignUpPayloadDataType, SignUpActionReturnDataType, IVerifyEmailActionReturnData } from './types';

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
    throw error.message as string;
  }
});
