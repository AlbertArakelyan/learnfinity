import { FC } from 'react';

import { Input, Button } from 'components';

import { IPasswordProps } from './types';

import styles from './Password.module.scss';

const Password: FC<IPasswordProps> = ({ register, handleSubmit, handleFormSubmit, errors, values, isLoading }) => {
  return (
    <form className={styles['password']} onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        label="Old Password"
        labelClassName={styles['password__input-label']}
        type="password"
        {...register('oldPassword')}
        error={errors.oldPassword?.message}
        isDirty={!!values.oldPassword}
      />
      <Input
        label="New Password"
        labelClassName={styles['password__input-label']}
        type="password"
        {...register('newPassword')}
        error={errors.newPassword?.message}
        isDirty={!!values.newPassword}
      />
      <Button isLoading={isLoading}>Save</Button>
    </form>
  );
};

export default Password;
