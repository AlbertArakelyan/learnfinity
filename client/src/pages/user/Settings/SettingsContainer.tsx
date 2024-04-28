import Settings from './Settings';

import useSettingsContainer from './useSettingsContainer';

import { SettingsTheme } from './components';

import { settingsThemes } from 'constants/settings';

const SettingsContainer = () => {
  const { handleChangeTheme, settingsTheme } = useSettingsContainer();

  const settingsThemesContent = settingsThemes.map((theme) => {
    return (
      <SettingsTheme
        key={theme.value}
        value={theme.value}
        label={theme.label}
        onClick={handleChangeTheme}
        isActive={theme.value === settingsTheme}
      />
    );
  });

  return <Settings settingsThemesContent={settingsThemesContent} />;
};

export default SettingsContainer;
