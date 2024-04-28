import { ThemeType, SettingsThemeType } from 'types';

export interface IUIState {
  theme: ThemeType;
  settingsTheme: SettingsThemeType;
  isAddFolderCommandModalOpen: boolean;
}
