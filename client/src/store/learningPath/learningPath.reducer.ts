import { createReducer } from '@reduxjs/toolkit';

import { createLearningPath } from './learningPath.actions';

import { ILearningPathState } from './types';

const initialState: ILearningPathState = {
  lists: {
    myList: [],
    sharedList: [],
    publicList: [],
  },
  entry: null,
  isLoading: false,
  error: null,
};

const learningPathReducer = createReducer(initialState, (builder) => {
  builder
    // createLearningPath
    .addCase(createLearningPath.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.lists.myList = [action.payload, ...state.lists.myList];
    })
    .addCase(createLearningPath.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(createLearningPath.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message as string;
    })

    .addDefaultCase((state) => state);
});

export default learningPathReducer;
