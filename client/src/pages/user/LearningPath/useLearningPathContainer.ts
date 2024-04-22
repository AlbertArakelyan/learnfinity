import { useLocation, useNavigation } from 'react-router-dom';

const useLearningPathContainer = () => {
  const location = useLocation();

  console.log(location);

  return {};
};

export default useLearningPathContainer;
