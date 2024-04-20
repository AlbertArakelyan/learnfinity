import { FC } from 'react';

import { Icon } from 'components';

import { ILearningPathItemProps } from './types';

import styles from './LearningPathItem.module.scss';

const LearningPathItem: FC<ILearningPathItemProps> = () => {
  return (
    <div className={styles['learning-path-item']}>
      <button className={styles['learning-path-item__header']}>
        <h3 className={styles['learning-path-item__title']}>Name</h3>
        <p className={styles['learning-path-item__description']}>Description</p>
      </button>
      <div className={styles['learning-path-item__actions-bar']}>
        <button className={styles['learning-path-item__action']}>
          <Icon className={styles['learning-path-item__action-icon']} name="edit" />
        </button>
        <button className={styles['learning-path-item__action']}>
          <Icon className={styles['learning-path-item__action-icon']} name="delete" />
        </button>
      </div>
    </div>
  );
};

export default LearningPathItem;
