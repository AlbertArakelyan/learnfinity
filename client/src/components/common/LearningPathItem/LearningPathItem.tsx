import { FC } from 'react';

import { Icon, ConfirmModal } from 'components';

import { ILearningPathItemProps } from './types';

import styles from './LearningPathItem.module.scss';

const LearningPathItem: FC<ILearningPathItemProps> = ({
  id,
  name,
  description,
  tagsContent,
  handleLearningPathClick,
  handleEditLearningPathClick,
  handleDeleteLearningPathClick,
  isDeleteLearningPathModalOpen,
  isLoadingDeleteLearningPath,
  onDeleteLearningPath,
  onCancelDeleteLearningPath,
  canEditOrDeleteLearningPath,
}) => {
  return (
    <div className={styles['learning-path-item']} onClick={() => handleLearningPathClick(id)}>
      <button className={styles['learning-path-item__header']}>
        <h3 className={styles['learning-path-item__title']}>{name}</h3>
        <p className={styles['learning-path-item__description']}>{description}</p>
      </button>
      <div className={styles['learning-path-item__tags']}>{tagsContent}</div>
      {canEditOrDeleteLearningPath && (
        <>
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
            <button className={styles['learning-path-item__action']} onClick={handleDeleteLearningPathClick}>
              <Icon className={styles['learning-path-item__action-icon']} name="delete" />
            </button>
          </div>
          <ConfirmModal
            title="Confirm Delete"
            description="Are you sure you want to delete this learning path?"
            isOpen={isDeleteLearningPathModalOpen}
            isLoading={isLoadingDeleteLearningPath}
            onConfirm={onDeleteLearningPath}
            onCancel={onCancelDeleteLearningPath}
          />
        </>
      )}
    </div>
  );
};

export default LearningPathItem;
