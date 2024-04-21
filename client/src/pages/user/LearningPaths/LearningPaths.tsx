import { FC } from 'react';

import { LoadingScreen, Pagination } from 'components';
import { LearningPathsNotFound } from './components';

import { ILearningPathsProps } from './types';

import styles from './LearningPaths.module.scss';

const LearningPaths: FC<ILearningPathsProps> = ({
  learningPathsContent,
  isLoadingGetLearningPaths,
  handleSetCurrentPage,
  currentPage,
  totalPages,
}) => {
  return (
    <LoadingScreen isLoading={isLoadingGetLearningPaths}>
      {!!learningPathsContent.length ? (
        <div className={styles['learning-paths']}>
          <div className={styles['learning-paths__content']}>{learningPathsContent}</div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleSetCurrentPage} />
        </div>
      ) : (
        <LearningPathsNotFound />
      )}
    </LoadingScreen>
  );
};

export default LearningPaths;
