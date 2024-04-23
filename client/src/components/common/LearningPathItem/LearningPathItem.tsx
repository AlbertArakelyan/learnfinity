import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'components';

import { ILearningPathItemProps } from './types';

import styles from './LearningPathItem.module.scss';

const LearningPathItem: FC<ILearningPathItemProps> = ({ name, description, tagsContent, id }) => {
  return (
    <Link className={styles['learning-path-item']} to={`/learning-paths/${id}`}>
      <button className={styles['learning-path-item__header']}>
        <h3 className={styles['learning-path-item__title']}>{name}</h3>
        <p className={styles['learning-path-item__description']}>{description}</p>
      </button>
      <div className={styles['learning-path-item__tags']}>{tagsContent}</div>
      <div className={styles['learning-path-item__actions-bar']}>
        <button className={styles['learning-path-item__action']}>
          <Icon className={styles['learning-path-item__action-icon']} name="edit" />
        </button>
        <button className={styles['learning-path-item__action']}>
          <Icon className={styles['learning-path-item__action-icon']} name="delete" />
        </button>
      </div>
    </Link>
  );
};

export default LearningPathItem;
