import { createReducer } from '@reduxjs/toolkit';
import store from 'store';

import { changeTheme } from './ui.actions';

import { getPreferredTheme } from 'utils';

import { IUIState } from './types';

const initialState: IUIState = {
  theme: store.get('theme') || getPreferredTheme(),
  settingsTheme: store.get('settingsTheme') || 'systemDefault',
  isAddFolderCommandModalOpen: false,
};

const uiReducer = createReducer(initialState, (buider) => {
  buider
    .addCase(changeTheme, (state, action) => {
      state.settingsTheme = action.payload;

      if (action.payload === 'systemDefault') {
        state.theme = getPreferredTheme();
      } else {
        state.theme = action.payload;
      }
    })
    .addDefaultCase((state) => state);
});

export default uiReducer;
