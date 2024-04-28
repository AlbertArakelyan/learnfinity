import { FC } from 'react';

import { ISettingsProps } from './types';

import styles from './Settings.module.scss';

const Settings: FC<ISettingsProps> = ({ settingsThemesContent }) => {
  return (
    <div className={styles['settings']}>
      <h2 className={styles['settings__title']}>Theme Preferences</h2>
      <div className={styles['settings__themes']}>{settingsThemesContent}</div>
    </div>
  );
};

export default Settings;
