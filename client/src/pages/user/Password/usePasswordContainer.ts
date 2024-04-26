import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'store/index';

import { changePassword, selectIsLoading } from 'store/user';

import { changePasswordSchema } from 'utils';

import { IChangePasswordData } from 'types';

const usePasswordContainer = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IChangePasswordData>({
    resolver: yupResolver(changePasswordSchema),
  });

  const values = watch();

  const handleFormSubmit = (data: IChangePasswordData) => {
    dispatch(changePassword(data));
  };

  return {
    register,
    handleSubmit,
    handleFormSubmit,
    errors,
    values,
    isLoading,
  };
};

export type UsePasswordContainerType = ReturnType<typeof usePasswordContainer>;

export default usePasswordContainer;
