import ResetPassword from './ResetPassword';

import useResetPasswordContainer from './useResetPasswordContainer';

const ResetPasswordContainer = () => {
  const { isLoading, register, handleSubmit, values, errors, handleFormSubmit } = useResetPasswordContainer();

  return (
    <ResetPassword
      isLoading={isLoading}
      handleFormSubmit={handleFormSubmit}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      values={values}
    />
  );
};

export default ResetPasswordContainer;
