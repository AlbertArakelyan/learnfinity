import Password from './Password';

import usePasswordContainer from './usePasswordContainer';

const PasswordContainer = () => {
  const { register, handleSubmit, handleFormSubmit, errors, values, isLoading } = usePasswordContainer();

  return (
    <Password
      register={register}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      errors={errors}
      values={values}
      isLoading={isLoading}
    />
  );
};

export default PasswordContainer;
