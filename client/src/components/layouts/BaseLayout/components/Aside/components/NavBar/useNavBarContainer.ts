import { useNavigate } from 'react-router-dom';

import { useQuery } from 'hooks';

import { ModalQueryStates, Queries } from 'constants/global';

const useNavBarContainer = () => {
  const navigate = useNavigate();
  const query = useQuery();

  const isCreateLearningPathModalOpen = query.get(Queries.addEditLearningPath) === ModalQueryStates.true;

  const handleCreateButtonClick = () => {
    navigate({
      search: `?${Queries.addEditLearningPath}=${ModalQueryStates.true}`,
    });
  };

  const handleClose = () => {
    navigate({
      search: '',
    });
  };

  return {
    isCreateLearningPathModalOpen,
    handleCreateButtonClick,
    handleClose,
  };
};

export type UseNavBarContainerType = ReturnType<typeof useNavBarContainer>;

export default useNavBarContainer;
