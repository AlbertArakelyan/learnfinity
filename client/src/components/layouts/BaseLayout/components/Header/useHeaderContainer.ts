import store from 'store';
import { useAppSelector, useAppDispatch } from 'store/index';

import { selectUser, logOut } from 'store/user';

const useHeaderContainer = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
    store.remove('accessToken');
  };

  return {
    user,
    handleLogOut,
  };
};

export type UseHeaderContainerType = ReturnType<typeof useHeaderContainer>;

export default useHeaderContainer;
