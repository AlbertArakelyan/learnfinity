import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'store/index';

import { forgotPassword, selectForgotPasswordData, selectIsLoading } from 'store/user';

import { forgotPasswordSchema } from 'utils';

import { IUserForgotPasswordData } from 'types';

const useForgotPasswordContainer = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const forgotPasswordData = useAppSelector(selectForgotPasswordData);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserForgotPasswordData>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const values = watch();

  const handleFormSubmit = (data: IUserForgotPasswordData) => {
    dispatch(forgotPassword(data));
  };

  return {
    register,
    handleSubmit,
    handleFormSubmit,
    isLoading,
    forgotPasswordData,
    errors,
    values,
  };
};

export type UseForgotPasswordContainer = ReturnType<typeof useForgotPasswordContainer>;

export default useForgotPasswordContainer;
