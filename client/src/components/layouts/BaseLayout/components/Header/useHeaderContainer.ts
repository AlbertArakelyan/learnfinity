import { useAppSelector } from 'store/index';

import { selectUser } from 'store/user';

const useHeaderContainer = () => {
  const user = useAppSelector(selectUser);

  return {
    user,
  };
};

export type UseHeaderContainerType = ReturnType<typeof useHeaderContainer>;

export default useHeaderContainer;
