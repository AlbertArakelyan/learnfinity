import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { CREATE_LEARNING_PATH } from './learningPath.actionTypes';

import { LearningPathService } from 'services';

import { CreateLearningPathPayloadDataType, CreateLearningPathActionReturnDataType } from './types';

import { smthWentWrong } from 'constants/messages';

export const createLearningPath = createAsyncThunk<
  CreateLearningPathActionReturnDataType,
  CreateLearningPathPayloadDataType
>(CREATE_LEARNING_PATH, async (data) => {
  try {
    const response = await LearningPathService.createLearningPath<
      CreateLearningPathActionReturnDataType,
      CreateLearningPathPayloadDataType
    >(data);

    if (!response.data?.success) {
      throw new Error(response.data.message || smthWentWrong);
    }

    return response.data.data;
  } catch (error: any) {
    console.log('createLearningPath', error);
    toast.error(error.message, {
      type: 'error',
      hideProgressBar: true,
    });
    throw error.message as string;
  }
});
