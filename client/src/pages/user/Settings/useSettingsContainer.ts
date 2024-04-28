import { useAppDispatch, useAppSelector } from 'store/index';

import { changeTheme, selectSettingsTheme } from 'store/ui';

import { setColorThemeInLocaleStorage } from 'helpers';

import { SettingsThemeType } from 'types';

const useSettingsContainer = () => {
  const dispatch = useAppDispatch();

  const settingsTheme = useAppSelector(selectSettingsTheme);

  const handleChangeTheme = (value: SettingsThemeType) => {
    dispatch(changeTheme(value));
    setColorThemeInLocaleStorage(value);
  };

  return {
    handleChangeTheme,
    settingsTheme,
  };
};

export type UseSettingsContainerType = ReturnType<typeof useSettingsContainer>;

export default useSettingsContainer;
