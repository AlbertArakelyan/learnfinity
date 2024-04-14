import Auth from './Auth';

import useAuthContainer from './useAuthContainer';

const AuthContainer = () => {
  const { isSignUp, register, handleSubmit, handleFormSubmit, errors, values, isLoading, verificationData } =
    useAuthContainer();

  return (
    <Auth
      isSignUp={isSignUp}
      register={register}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      errors={errors}
      values={values}
      isLoading={isLoading}
      verificationData={verificationData}
    />
  );
};

export default AuthContainer;
