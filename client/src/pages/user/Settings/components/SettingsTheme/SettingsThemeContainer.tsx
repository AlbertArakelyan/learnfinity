import { FC } from 'react';

import SettingsTheme from './SettingsTheme';

import { ISettingsThemeContainerProps } from './types';

const SettingsThemeContainer: FC<ISettingsThemeContainerProps> = ({ value, label, isActive, onClick }) => {
  return <SettingsTheme value={value} label={label} isActive={isActive} onClick={onClick} />;
};

export default SettingsThemeContainer;
