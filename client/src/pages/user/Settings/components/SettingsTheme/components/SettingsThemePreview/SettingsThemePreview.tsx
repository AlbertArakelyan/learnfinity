import { FC } from 'react';

import { ISettingsThemePreviewProps } from './types';

import styles from './SettingsThemePreview.module.scss';

const SettingsThemePreview: FC<ISettingsThemePreviewProps> = ({ theme }) => {
  return (
    <div className={styles['settings-theme__preview-wrapper']}>
      {theme === 'systemDefault' ? (
        <>
          <div
            className={`${styles['settings-theme__preview']} ${styles['settings-theme__preview--half']} ${styles['settings-theme__preview--light']}`}
          >
            <div className={styles['settings-theme__preview-text']}></div>
            <div className={styles['settings-theme__preview-text']}></div>
            <div className={styles['settings-theme__preview-text']}></div>
          </div>
          <div
            className={`${styles['settings-theme__preview']} ${styles['settings-theme__preview--half']} ${styles['settings-theme__preview--dark']}`}
          >
            <div className={styles['settings-theme__preview-text']}></div>
            <div className={styles['settings-theme__preview-text']}></div>
            <div className={styles['settings-theme__preview-text']}></div>
          </div>
        </>
      ) : (
        <div className={`${styles['settings-theme__preview']} ${styles[`settings-theme__preview--${theme}`]}`}>
          <div className={styles['settings-theme__preview-text']}></div>
          <div className={styles['settings-theme__preview-text']}></div>
          <div className={styles['settings-theme__preview-text']}></div>
        </div>
      )}
    </div>
  );
};

export default SettingsThemePreview;
