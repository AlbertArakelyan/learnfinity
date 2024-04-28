import store from 'store';

import { getPreferredTheme } from 'utils';

import { SettingsThemeType } from 'types';

const setColorThemeInLocaleStorage = (theme: SettingsThemeType) => {
  store.set('settingsTheme', theme);

  if (theme === 'systemDefault') {
    store.set('theme', getPreferredTheme());
  } else {
    store.set('theme', theme);
  }
};

export default setColorThemeInLocaleStorage;
