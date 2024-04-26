import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, useAppDispatch } from 'store/index';

import { editUser, selectUserFullName, selectIsLoading } from 'store/user';

import { nameSchema } from 'utils';

import { INameData } from 'types';

const useNameContainer = () => {
  const dispatch = useAppDispatch();

  const userFullName = useAppSelector(selectUserFullName);
  const isLoading = useAppSelector(selectIsLoading);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<INameData>({
    resolver: yupResolver(nameSchema),
    defaultValues: {
      fullName: userFullName,
    },
  });

  const name = watch('fullName');

  const handleSubmitForm = (data: INameData) => {
    dispatch(editUser(data));
  };

  useEffect(() => {
    if (userFullName) {
      setValue('fullName', userFullName);
    }
  }, [userFullName]);

  return {
    register,
    name,
    errors,
    handleSubmit,
    handleSubmitForm,
    isLoading,
  };
};

export type UseNameContainerType = ReturnType<typeof useNameContainer>;

export default useNameContainer;
