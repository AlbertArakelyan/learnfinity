import { FC } from 'react';

import { LoadingScreen, ItemNotFound } from 'components';
import { LearningPathRelatedItems } from './components';

import { ILearningPathProps } from './types';

import styles from './LearningPath.module.scss';

const LearningPath: FC<ILearningPathProps> = ({ learningPath, isLoadingGetLearningPath }) => {
  return (
    <LoadingScreen isLoading={isLoadingGetLearningPath}>
      {learningPath ? (
        <div className={styles['learning-path']}>
          <div className={styles['learning-path__info']}>
            <h2 className={styles['learning-path__title']}>{learningPath.name}</h2>
            <p className={styles['learning-path__description']}>{learningPath.description}</p>
          </div>
          <LearningPathRelatedItems />
        </div>
      ) : (
        <ItemNotFound title="Learning Path Not Found" />
      )}
    </LoadingScreen>
  );
};

export default LearningPath;
