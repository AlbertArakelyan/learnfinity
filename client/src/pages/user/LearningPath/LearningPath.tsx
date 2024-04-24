import { FC } from 'react';

import { LoadingScreen, ItemNotFound, LinkButton } from 'components';
import { LearningPathRelatedItems } from './components';

import { ILearningPathProps } from './types';

import styles from './LearningPath.module.scss';

const LearningPath: FC<ILearningPathProps> = ({
  learningPath,
  isLoadingGetLearningPath,
  handleLearningPathEditClick,
}) => {
  return (
    <LoadingScreen isLoading={isLoadingGetLearningPath}>
      {learningPath ? (
        <div className={styles['learning-path']}>
          <div className={styles['learning-path__info']}>
            <div className={styles['learning-path__top-bar']}>
              <h2 className={styles['learning-path__title']}>{learningPath.name}</h2>
              {/*TODO show the block below only to the owner of the learning path*/}
              <div className={styles['learning-path__top-bar__actions']}>
                <LinkButton className={styles['learning-path__top-bar__action']} icon="plus">
                  Add Item
                </LinkButton>
                <LinkButton
                  className={styles['learning-path__top-bar__action']}
                  icon="edit"
                  onClick={handleLearningPathEditClick}
                >
                  Edit
                </LinkButton>
                <LinkButton className={styles['learning-path__top-bar__action']} icon="delete" color="danger">
                  Delete
                </LinkButton>
              </div>
            </div>
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
