import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/index';

import { verifyEmail, selectIsVerificationPassed } from 'store/user';

const useVerifyEmailContainer = () => {
  const dispatch = useAppDispatch();
  const { token } = useParams();

  const isVerificationPassed = useAppSelector(selectIsVerificationPassed);

  useEffect(() => {
    if (token) {
      dispatch(verifyEmail(token));
    } else {
      // TODO make an alert with toastify [Token is not provided or invalid]
    }
  }, []);

  return {
    isVerificationPassed,
  };
};

export type UseVerifyEmailContainerType = ReturnType<typeof useVerifyEmailContainer>;

export default useVerifyEmailContainer;
