import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  CREATE_LEARNING_PATH,
  GET_LEARNING_PATHS,
  SET_CURRENT_PAGE,
  GET_USER_LEARNING_PATH,
  UPDATE_USER_LEARNING_PATH,
  SET_LEARNING_PATH,
  RESET_LEARNING_PATH,
  DELETE_USER_LEARNING_PATH,
  CREATE_USER_LEARNING_PATH_ITEM,
  EDIT_USER_LEARNING_PATH_ITEM,
  DELETE_USER_LEARNING_PATH_ITEM,
  SET_EDITING_LEARNING_PATH_ITEM,
  RESET_EDITING_LEARNING_PATH_ITEM,
} from './learningPath.actionTypes';

import { LearningPathService } from 'services';

import { LearningPathsListAndRequestTypes } from 'constants/learningPath';

import {
  CreateLearningPathPayloadDataType,
  CreateLearningPathActionReturnDataType,
  IGetLearningPathsPayloadData,
  IGetLearningPathsActionReturnData,
  IGetLearningPathActionReturnData,
  IEditLearningPathPayloadData,
  EditLearningPathActionReturnDataType,
  IDeleteLearningPathActionReturnData,
  CreateUserLearningPathItemReturnDataType,
  ICreateUserLearningPathItemPayloadData,
  IEditUserLearningPathItemPayloadData,
  EditUserLearningPathItemReturnDataType,
  IDeleteUserLearningPathItemPayloadData,
  IDeleteLearningPathItemActionReturnData,
} from './types';
import { ILearningPath, ILearningPathItem } from 'types';

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

      return {
        data: response.data.data.data,
        pagination: response.data.data.pageInfo,
        listType: LearningPathsListAndRequestTypes[learningPathsType],
      };
    } catch (error: any) {
      // TODO send error in specfic cases from backend not for !length
      // console.log('createLearningPath', error);
      toast.error(error.message, {
        type: 'error',
        hideProgressBar: true,
      });
      throw error.message as string;
    }
  }
);

export const getUserLearningPath = createAsyncThunk<IGetLearningPathActionReturnData, string>(
  GET_USER_LEARNING_PATH,
  async (id) => {
    try {
      const [learningPathResponse, learningPathItemsResponse] = await Promise.all([
        await LearningPathService.getUserLearningPath<ILearningPath>(id),
        await LearningPathService.getUserLearningPathItems<ILearningPathItem[]>(id),
      ]);

      if (!learningPathResponse.data?.success) {
        throw new Error(learningPathResponse.data.message || smthWentWrong);
      }

      if (!learningPathItemsResponse.data?.success) {
        toast.error(learningPathItemsResponse.data.message, {
          type: 'error',
          hideProgressBar: true,
        });
      }

      return {
        learningPath: learningPathResponse.data.data,
        learningPathItems: learningPathItemsResponse.data.data || [],
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

export const updateUserLearningPath = createAsyncThunk<
  EditLearningPathActionReturnDataType,
  IEditLearningPathPayloadData
>(UPDATE_USER_LEARNING_PATH, async ({ id, data }) => {
  try {
    const response = await LearningPathService.updateUserLearningPath<
      EditLearningPathActionReturnDataType,
      IEditLearningPathPayloadData['data']
    >(id, data);

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

export const deleteUserLearningPath = createAsyncThunk<IDeleteLearningPathActionReturnData, string>(
  DELETE_USER_LEARNING_PATH,
  async (id) => {
    try {
      const response = await LearningPathService.deleteUserLearningPath<IDeleteLearningPathActionReturnData>(id);

      if (!response.data?.success) {
        throw new Error(response.data.message || smthWentWrong);
      }

      // TODO fetch user learning path after delete with the same page user was in and return below with another prop (by changing the interface)

      return response.data.data;
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

export const createUserLearningPathItem = createAsyncThunk<
  CreateUserLearningPathItemReturnDataType,
  ICreateUserLearningPathItemPayloadData
>(CREATE_USER_LEARNING_PATH_ITEM, async ({ learningPathId, data }) => {
  try {
    const response = await LearningPathService.createUserLearningPathItem<
      CreateUserLearningPathItemReturnDataType,
      ICreateUserLearningPathItemPayloadData['data']
    >(learningPathId, data);

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

export const editUserLearningPathItem = createAsyncThunk<
  EditUserLearningPathItemReturnDataType,
  IEditUserLearningPathItemPayloadData
>(EDIT_USER_LEARNING_PATH_ITEM, async ({ learningPathId, learningPathItemId, learningPathItemData }) => {
  try {
    const response = await LearningPathService.editUserLearningPathItem<
      EditUserLearningPathItemReturnDataType,
      IEditUserLearningPathItemPayloadData['learningPathItemData']
    >(learningPathId, learningPathItemId, learningPathItemData);

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

export const deleteUserLearningPathItem = createAsyncThunk<
  IDeleteLearningPathItemActionReturnData,
  IDeleteUserLearningPathItemPayloadData
>(DELETE_USER_LEARNING_PATH_ITEM, async ({ learningPathId, learningPathItemId }) => {
  try {
    const response = await LearningPathService.deleteUserLearningPathItem<IDeleteLearningPathItemActionReturnData>(
      learningPathId,
      learningPathItemId
    );

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

export const setLearningPath = createAction<string>(SET_LEARNING_PATH);

export const resetLearningPath = createAction(RESET_LEARNING_PATH);

export const setEditingLearningPathItem = createAction<string>(SET_EDITING_LEARNING_PATH_ITEM);

export const resetEditingLearningPathItem = createAction(RESET_EDITING_LEARNING_PATH_ITEM);

export const setCurrentPage = createAction<number>(SET_CURRENT_PAGE);
