import { FC } from 'react';

import { Icon } from 'components';

import { ILearningPathItemOptionProps } from './types';

import styles from './LearningPathItemOption.module.scss';

const LearningPathItemOption: FC<ILearningPathItemOptionProps> = ({ label, icon }) => {
  return (
    <div className={styles['learning-path-item-option']}>
      {icon && (
        <Icon name={icon} className={styles['learning-path-item-option__icon']} width="1.25rem" height="1.25rem" />
      )}
      <span className={styles['learning-path-item-option__label']}>{label}</span>
    </div>
  );
};

export default LearningPathItemOption;
