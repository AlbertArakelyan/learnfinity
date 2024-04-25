import Name from './Name';

import useNameContainer from './useNameContainer';

const NameContainer = () => {
  const { register, name, errors, handleSubmit, handleSubmitForm, isLoading } = useNameContainer();

  return (
    <Name
      register={register}
      name={name}
      errors={errors}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      isLoading={isLoading}
    />
  );
};

export default NameContainer;
