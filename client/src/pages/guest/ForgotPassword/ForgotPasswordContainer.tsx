import ForgotPassword from './ForgotPassword';

import useForgotPasswordContainer from './useForgotPasswordContainer';

const ForgotPasswordContainer = () => {
  const { isLoading, handleFormSubmit, register, handleSubmit, errors, values, forgotPasswordData } =
    useForgotPasswordContainer();

  return (
    <ForgotPassword
      isLoading={isLoading}
      handleFormSubmit={handleFormSubmit}
      register={register}
      handleSubmit={handleSubmit}
      forgotPasswordData={forgotPasswordData}
      errors={errors}
      values={values}
    />
  );
};

export default ForgotPasswordContainer;
