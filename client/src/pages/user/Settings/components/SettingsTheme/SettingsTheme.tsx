import { FC } from 'react';

import { SettingsThemePreview } from './components';

import { ISettingsThemeProps } from './types';

import styles from './SettingsTheme.module.scss';

const SettingsTheme: FC<ISettingsThemeProps> = ({ value, label, isActive, onClick }) => {
  return (
    <div className={styles['settings-theme-wrapper']}>
      <button
        className={`${styles['settings-theme']} ${isActive ? styles['settings-theme--active'] : ''}`}
        onClick={() => onClick(value)}
      >
        <SettingsThemePreview theme={value} />
        <div className={styles['settings-theme__name-wrapper']}>
          <span className={styles['settings-theme__name']}>{label}</span>
        </div>
      </button>
    </div>
  );
};

export default SettingsTheme;
