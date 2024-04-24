import { FC } from 'react';

import LearningPathItem from './LearningPathItem';

import useLearningPathItemContainer from './useLearningPathItemContainer';

import { ILearningPathItemContainerProps } from './types';

import styles from './LearningPathItem.module.scss';

const LearningPathItemContainer: FC<ILearningPathItemContainerProps> = ({ name, description, tags, id }) => {
  const { handleLearningPathClick, handleEditLearningPathClick } = useLearningPathItemContainer();

  const tagsContent = tags.map((tag) => {
    return (
      <div className={styles['learning-path-item__tag']} key={tag}>
        {tag}
      </div>
    );
  });

  return (
    <LearningPathItem
      id={id}
      name={name}
      description={description}
      tagsContent={tagsContent}
      handleLearningPathClick={handleLearningPathClick}
      handleEditLearningPathClick={handleEditLearningPathClick}
    />
  );
};

export default LearningPathItemContainer;
