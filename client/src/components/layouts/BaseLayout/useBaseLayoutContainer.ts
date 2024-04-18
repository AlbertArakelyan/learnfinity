import { useEffect } from 'react';
import { useAppDispatch } from 'store/index';

import { getUser } from 'store/user';

const useBaseLayoutContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  });

  return {};
};

export type UseBaseLayoutContainer = ReturnType<typeof useBaseLayoutContainer>;

export default useBaseLayoutContainer;
