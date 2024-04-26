import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { deleteAccountSchema } from 'utils';

import { IDeleteAccountData } from 'types';

const useDeleteAccountContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IDeleteAccountData>({
    resolver: yupResolver(deleteAccountSchema),
  });

  const values = watch();

  const handleFormSubmit = (data: IDeleteAccountData) => {
    alert('Why to delete, just stay in the app ^^');
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    handleFormSubmit,
    errors,
    values,
  };
};

export type UseDeleteAccountContainerType = ReturnType<typeof useDeleteAccountContainer>;

export default useDeleteAccountContainer;
