import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { CREATE_LEARNING_PATH, GET_LEARNING_PATHS, SET_CURRENT_PAGE } from './learningPath.actionTypes';

import { LearningPathService } from 'services';

import { LearningPathsListAndRequestTypes } from 'constants/learningPath';

import {
  CreateLearningPathPayloadDataType,
  CreateLearningPathActionReturnDataType,
  IGetLearningPathsPayloadData,
  IGetLearningPathsActionReturnData,
} from './types';
import { ILearningPath } from 'types';

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

export const getLearningPaths = createAsyncThunk<IGetLearningPathsActionReturnData, IGetLearningPathsPayloadData>(
  GET_LEARNING_PATHS,
  async ({ learningPathsType, page = 1 }) => {
    try {
      const response = await LearningPathService.getLearningPaths<ILearningPath[]>(learningPathsType, page);

      if (!response.data?.success) {
        throw new Error(response.data.message || smthWentWrong);
      }

      console.log(response.data.data.pageInfo);

      return {
        data: response.data.data.data,
        pagination: response.data.data.pageInfo,
        listType: LearningPathsListAndRequestTypes[learningPathsType],
      };
    } catch (error: any) {
      console.log('createLearningPath', error);
      toast.error(error.message, {
        type: 'error',
        hideProgressBar: true,
      });
      throw error.message as string;
    }
  }
);

export const setCurrentPage = createAction<number>(SET_CURRENT_PAGE);
