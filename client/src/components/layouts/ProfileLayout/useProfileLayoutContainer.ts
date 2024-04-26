import { useAppSelector } from 'store/index';

import { selectUser } from 'store/user';

const useProfileLayoutContainer = () => {
  const user = useAppSelector(selectUser);

  return {
    user,
  };
};

export type UseProfileLayoutContainerType = ReturnType<typeof useProfileLayoutContainer>;

export default useProfileLayoutContainer;
