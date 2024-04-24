import { createReducer } from '@reduxjs/toolkit';

import {
  createLearningPath,
  getLearningPaths,
  getUserLearningPath,
  updateUserLearningPath,
  deleteUserLearningPath,
  resetLearningPath,
  setLearningPath,
  setCurrentPage,
} from './learningPath.actions';

import { ILearningPathState } from './types';

import { initialPagination } from 'constants/global';

const initialLists: ILearningPathState['lists'] = {
  myList: [],
  sharedList: [],
  publicList: [],
};

const initialState: ILearningPathState = {
  lists: initialLists,
  pagination: initialPagination,
  currentPage: 1,
  entry: null,
  entryItems: [],
  isLoading: {
    createEditLearningPath: false,
    getLearningPaths: false,
    getLearningPath: false,
    deleteLearningPath: false,
  },
  error: null,
};

const learningPathReducer = createReducer(initialState, (builder) => {
  builder
    // createLearningPath
    .addCase(createLearningPath.fulfilled, (state, action) => {
      state.isLoading.createEditLearningPath = false;
      state.error = null;
      state.lists.myList = [action.payload, ...state.lists.myList];
    })
    .addCase(createLearningPath.pending, (state) => {
      state.isLoading.createEditLearningPath = true;
      state.error = null;
    })
    .addCase(createLearningPath.rejected, (state, action) => {
      state.isLoading.createEditLearningPath = false;
      state.error = action.error?.message as string;
    })

    // getLearningPaths
    .addCase(getLearningPaths.fulfilled, (state, action) => {
      state.lists[action.payload.listType] = action.payload.data;
      state.pagination = action.payload.pagination;
      state.isLoading.getLearningPaths = false;
      state.error = null;
    })
    .addCase(getLearningPaths.pending, (state) => {
      state.isLoading.getLearningPaths = true;
      state.error = null;
    })
    .addCase(getLearningPaths.rejected, (state, action) => {
      state.lists = initialLists;
      state.pagination = initialPagination;
      // Temporary solution find a way to reset particular list instead of all lists
      state.isLoading.getLearningPaths = false;
      state.error = action.error?.message as string;
    })

    // getUserLearningPath
    .addCase(getUserLearningPath.fulfilled, (state, action) => {
      state.entry = action.payload.learningPath;
      state.entryItems = action.payload.learningPathItems;
      state.isLoading.getLearningPath = false;
      state.error = null;
    })
    .addCase(getUserLearningPath.pending, (state) => {
      state.isLoading.getLearningPath = true;
      state.error = null;
    })
    .addCase(getUserLearningPath.rejected, (state, action) => {
      state.entry = null;
      state.isLoading.getLearningPath = false;
      state.error = action.error?.message as string;
    })

    // editUserLearningPath
    .addCase(updateUserLearningPath.fulfilled, (state, action) => {
      state.entry = action.payload;

      // state.lists.myList = state.lists.myList.map((learningPath) => {
      //   if (learningPath._id === action.payload._id) {
      //     return action.payload;
      //   }
      //
      //   return learningPath;
      // });

      const learningPath = state.lists.myList.find((learningPath) => learningPath._id === action.payload._id);

      if (learningPath) {
        Object.assign(learningPath, action.payload);
      }

      state.isLoading.createEditLearningPath = false;
      state.error = null;
    })
    .addCase(updateUserLearningPath.pending, (state) => {
      state.isLoading.createEditLearningPath = true;
      state.error = null;
    })
    .addCase(updateUserLearningPath.rejected, (state, action) => {
      state.isLoading.createEditLearningPath = false;
      state.error = action.error?.message as string;
    })

    // deleteUserLearningPath
    .addCase(deleteUserLearningPath.fulfilled, (state, action) => {
      state.lists.myList = state.lists.myList.filter((learningPath) => learningPath._id !== action.payload.id);
      state.isLoading.deleteLearningPath = false;
      state.error = null;
    })
    .addCase(deleteUserLearningPath.pending, (state) => {
      state.isLoading.deleteLearningPath = true;
      state.error = null;
    })
    .addCase(deleteUserLearningPath.rejected, (state, action) => {
      state.entry = null;
      state.isLoading.deleteLearningPath = false;
      state.error = action.error?.message as string;
    })

    // setLearningPath
    .addCase(setLearningPath, (state, action) => {
      state.entry = state.lists.myList.find((learningPath) => learningPath._id === action.payload) || null;
    })

    // resetLearningPath
    .addCase(resetLearningPath, (state) => {
      state.entry = null;
    })

    // setCurrentPage
    .addCase(setCurrentPage, (state, action) => {
      state.currentPage = action.payload;
    })

    .addDefaultCase((state) => state);
});

export default learningPathReducer;
