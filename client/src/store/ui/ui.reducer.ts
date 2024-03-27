import { createReducer } from '@reduxjs/toolkit';

const initialState = {};

const uiReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state) => state);
});

export default uiReducer;
