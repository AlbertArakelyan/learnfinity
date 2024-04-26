import DeleteAccount from './DeleteAccount';

import useDeleteAccountContainer from './useDeleteAccountContainer';

const DeleteAccountContainer = () => {
  const { register, handleSubmit, handleFormSubmit, errors, values } = useDeleteAccountContainer();

  return (
    <DeleteAccount
      register={register}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      errors={errors}
      values={values}
    />
  );
};

export default DeleteAccountContainer;
