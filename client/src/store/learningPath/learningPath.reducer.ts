import { createReducer } from '@reduxjs/toolkit';

import { createLearningPath, getLearningPaths, getUserLearningPath, setCurrentPage } from './learningPath.actions';

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
    createLearningPath: false,
    getLearningPaths: false,
    getLearningPath: false,
  },
  error: null,
};

const learningPathReducer = createReducer(initialState, (builder) => {
  builder
    // createLearningPath
    .addCase(createLearningPath.fulfilled, (state, action) => {
      state.isLoading.createLearningPath = false;
      state.error = null;
      state.lists.myList = [action.payload, ...state.lists.myList];
    })
    .addCase(createLearningPath.pending, (state) => {
      state.isLoading.createLearningPath = true;
      state.error = null;
    })
    .addCase(createLearningPath.rejected, (state, action) => {
      state.isLoading.createLearningPath = false;
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

    // setCurrentPage
    .addCase(setCurrentPage, (state, action) => {
      state.currentPage = action.payload;
    })

    .addDefaultCase((state) => state);
});

export default learningPathReducer;
