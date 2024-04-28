import { ISettingsTheme, SettingsThemeType } from 'types';

export interface ISettingsThemeContainerProps extends ISettingsTheme {
  onClick: (theme: SettingsThemeType) => void;
  isActive: boolean;
}

export type ISettingsThemeProps = ISettingsThemeContainerProps;
