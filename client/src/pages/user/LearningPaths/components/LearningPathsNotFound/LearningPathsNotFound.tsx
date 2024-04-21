import styles from './LearningPathsNotFound.module.scss';

const LearningPathsNotFound = () => {
  return (
    <div className={styles['learning-paths__not-found']}>
      <h4 className={styles['learning-paths__not-found-title']}>Learning Paths Not Found</h4>
      <p className={styles['learning-paths__not-found-description']}>
        Either you don't have any created ones either shared ones with you.
      </p>
    </div>
  );
};

export default LearningPathsNotFound;
