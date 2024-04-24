import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'components';

import { ILearningPathItemProps } from './types';

import styles from './LearningPathItem.module.scss';

const LearningPathItem: FC<ILearningPathItemProps> = ({
  name,
  description,
  tagsContent,
  handleLearningPathClick,
  handleEditLearningPathClick,
  id,
}) => {
  return (
    <div className={styles['learning-path-item']} onClick={() => handleLearningPathClick(id)}>
      <button className={styles['learning-path-item__header']}>
        <h3 className={styles['learning-path-item__title']}>{name}</h3>
        <p className={styles['learning-path-item__description']}>{description}</p>
      </button>
      <div className={styles['learning-path-item__tags']}>{tagsContent}</div>
      {/*TODO: show block below only for creators*/}
      <div className={styles['learning-path-item__actions-bar']}>
        <button
          className={styles['learning-path-item__action']}
          onClick={(e) => {
            e.stopPropagation();
            handleEditLearningPathClick(id);
          }}
        >
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
