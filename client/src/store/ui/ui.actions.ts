import { createAction } from '@reduxjs/toolkit';

import { CHANGE_THEME } from './ui.actionTypes';

import { SettingsThemeType } from 'types';

export const changeTheme = createAction<SettingsThemeType>(CHANGE_THEME);
