import LearningPath from './LearningPath';

import useLearningPathContainer from './useLearningPathContainer';

const LearningPathContainer = () => {
  useLearningPathContainer();

  return <LearningPath />;
};

export default LearningPathContainer;
