import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../store';

import { resetPassword, selectIsLoading } from 'store/user';

import { resetPasswordSchema } from 'utils';

import { IUserResetPasswordData } from 'types';

const useResetPasswordContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { resetToken } = useParams();

  const isLoading = useAppSelector(selectIsLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IUserResetPasswordData>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const values = watch();

  const handleFormSubmit = (data: IUserResetPasswordData) => {
    if (!resetToken) {
      return;
    }

    dispatch(
      resetPassword({
        ...data,
        resetToken,
      })
    ).then((res: any) => {
      if (!res.error) {
        navigate('/auth');
      }
    });
  };

  return {
    register,
    handleSubmit,
    handleFormSubmit,
    isLoading,
    errors,
    values,
  };
};

export type UseResetPasswordContainerType = ReturnType<typeof useResetPasswordContainer>;

export default useResetPasswordContainer;
