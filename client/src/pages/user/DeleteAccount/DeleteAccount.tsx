import { FC } from 'react';

import { Input, Button } from 'components';

import { IDeleteAccountContainerProps } from './types';

import styles from './DeleteAccount.module.scss';

const DeleteAccount: FC<IDeleteAccountContainerProps> = ({
  register,
  handleSubmit,
  handleFormSubmit,
  errors,
  values,
}) => {
  return (
    <form className={styles['delete-account']} onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        label="Password"
        labelClassName={styles['delete-account__input-label']}
        type="password"
        {...register('password')}
        error={errors.password?.message}
        isDirty={!!values.password}
      />
      <Button btnColor="danger">Delete Account</Button>
    </form>
  );
};

export default DeleteAccount;
