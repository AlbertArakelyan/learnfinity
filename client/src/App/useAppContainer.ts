import { useAppSelector } from 'store/index';

import { selectTheme } from 'store/ui';
import { selectAccessToken } from 'store/user';

const useAppContainer = () => {
  const theme = useAppSelector(selectTheme);
  const accessToken = useAppSelector(selectAccessToken);

  const isUserAuth = !!accessToken;

  return {
    theme,
    isUserAuth,
  };
};

export type UseAppContainerType = ReturnType<typeof useAppContainer>;

export default useAppContainer;
