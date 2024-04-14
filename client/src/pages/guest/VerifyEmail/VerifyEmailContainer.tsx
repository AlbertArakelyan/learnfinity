import VerifyEmail from './VerifyEmail';

import useVerifyEmailContainer from './useVerifyEmailContainer';

const VerifyEmailContainer = () => {
  const { isVerificationPassed } = useVerifyEmailContainer();

  return <VerifyEmail isVerificationPassed={isVerificationPassed} />;
};

export default VerifyEmailContainer;
