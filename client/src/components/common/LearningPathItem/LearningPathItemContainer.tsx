import { FC } from 'react';

import LearningPathItem from './LearningPathItem';

import { ILearningPathItemContainerProps } from './types';

import styles from './LearningPathItem.module.scss';

const LearningPathItemContainer: FC<ILearningPathItemContainerProps> = ({ name, description, tags, id }) => {
  const tagsContent = tags.map((tag) => {
    return (
      <div className={styles['learning-path-item__tag']} key={tag}>
        {tag}
      </div>
    );
  });

  return <LearningPathItem name={name} description={description} id={id} tagsContent={tagsContent} />;
};

export default LearningPathItemContainer;
