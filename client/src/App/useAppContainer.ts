import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/index';

import { changeTheme, selectTheme } from 'store/ui';
import { selectAccessToken } from 'store/user';

import { getPreferredTheme } from 'utils';

const useAppContainer = () => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(selectTheme);
  const accessToken = useAppSelector(selectAccessToken);

  const isUserAuth = !!accessToken;

  useEffect(() => {
    const preferredTheme = getPreferredTheme();

    if (theme !== preferredTheme) {
      dispatch(changeTheme(preferredTheme));
    }
  }, []);

  return {
    theme,
    isUserAuth,
  };
};

export type UseAppContainerType = ReturnType<typeof useAppContainer>;

export default useAppContainer;
