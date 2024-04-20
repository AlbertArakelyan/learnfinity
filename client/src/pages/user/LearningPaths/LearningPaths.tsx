import { LearningPathItem } from 'components';

import styles from './LearningPaths.module.scss';

const LearningPaths = () => {
  return (
    <div className={styles['learning-paths']}>
      <LearningPathItem />
      <LearningPathItem />
      <LearningPathItem />
      <LearningPathItem />
    </div>
  );
};

export default LearningPaths;
