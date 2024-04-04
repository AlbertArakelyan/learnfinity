import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';

import { changeTheme, selectTheme } from '../store/ui';

import { getPreferredTheme } from 'utils';

const useAppContainer = () => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(selectTheme);

  const isUserAuth = false;

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
