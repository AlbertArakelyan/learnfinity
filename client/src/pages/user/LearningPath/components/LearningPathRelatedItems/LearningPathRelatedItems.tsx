import { FC } from 'react';

import { ItemNotFound } from 'components';

import { ILearningPathRelatedItemsProps } from './types';

import styles from './LearningPathRelatedItems.module.scss';

const LearningPathRelatedItems: FC<ILearningPathRelatedItemsProps> = ({ learningPathRelatedItemsContent }) => {
  return !!learningPathRelatedItemsContent.length ? (
    <div className={styles['learning-path__related-items-wrapper']}>
      <ul className={styles['learning-path__related-items']}>{learningPathRelatedItemsContent}</ul>
    </div>
  ) : (
    <ItemNotFound
      title="Learning Path Items Not Found"
      description="Learning Path items related to this Learning Path not found."
    />
  );
};

export default LearningPathRelatedItems;
