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
    <div className={styles['learning-paths']}>
      <LoadingScreen isLoading={isLoadingGetLearningPaths}>
        {!!learningPathsContent.length ? (
          <div className={styles['learning-paths__content']}>{learningPathsContent}</div>
        ) : (
          <LearningPathsNotFound />
        )}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleSetCurrentPage} />
      </LoadingScreen>
    </div>
  );
};

export default LearningPaths;
