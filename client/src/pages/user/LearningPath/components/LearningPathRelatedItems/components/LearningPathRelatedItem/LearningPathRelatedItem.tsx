import { FC } from 'react';

import { Icon, LinkButton, ConfirmModal } from 'components';

import { ILearningPathRelatedItemProps } from './types';

import styles from './LearningPathRelatedItem.module.scss';

const LearningPathRelatedItem: FC<ILearningPathRelatedItemProps> = ({
  name,
  description,
  instructions,
  type,
  sourceUrl,
  number = 1,
  handleLearningLearningPathItemEditClick,
  handleLearningLearningPathItemDeleteClick,
  isLearningPathRelatedItemDeleteModalOpen,
  onCancelDeleteLearningPathItem,
  onDeleteLearningPathItem,
  isLoadingDeleteLearningPathItem,
  canEditOrDeleteLearningPathItem,
}) => {
  return (
    <li className={styles['learning-path__related-item']}>
      <div className={styles['learning-path__related-item-top-bar']}>
        <h3 className={styles['learning-path__related-item-title']}>
          {number}. {name}
        </h3>
        {/*TODO show the block below only to the owner of the learning path*/}
        {canEditOrDeleteLearningPathItem && (
          <div className={styles['learning-path__related-item-actions']}>
            <LinkButton icon="edit" onClick={handleLearningLearningPathItemEditClick}>
              Edit
            </LinkButton>
            <LinkButton icon="delete" color="danger" onClick={handleLearningLearningPathItemDeleteClick}>
              Delete
            </LinkButton>
          </div>
        )}
      </div>
      <p className={styles['learning-path__related-item-description']}>{description}</p>
      <p className={styles['learning-path__related-item-instructions']}>
        <span className={styles['learning-path__related-item-instructions-text']}>Instructions: </span> {instructions}
      </p>
      <p className={styles['learning-path__related-item-type']}>
        <span className={styles['learning-path__related-item-type-text']}>Type: </span> {type}
      </p>
      <p className={styles['learning-path__related-item-link']}>
        <span className={styles['learning-path__related-item-link-text']}>
          <Icon
            className={styles['learning-path__related-item-link-icon']}
            name="link"
            width="1.25rem"
            height="1.25rem"
          />{' '}
          Resource Link:
        </span>
        <a className={styles['learning-path__related-item-link-value']} href={sourceUrl} target="_blank">
          {sourceUrl}
        </a>
      </p>
      {canEditOrDeleteLearningPathItem && (
        <ConfirmModal
          title="Confirm Delete"
          description="Are you sure you want to delete this learning path item?"
          onConfirm={onDeleteLearningPathItem}
          onCancel={onCancelDeleteLearningPathItem}
          isOpen={isLearningPathRelatedItemDeleteModalOpen}
          isLoading={isLoadingDeleteLearningPathItem}
        />
      )}
    </li>
  );
};

export default LearningPathRelatedItem;
