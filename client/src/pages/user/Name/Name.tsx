import { FC } from 'react';

import { Input, Button } from 'components';

import { INameProps } from './types';

import styles from './Name.module.scss';

const Name: FC<INameProps> = ({ register, name, errors, handleSubmit, handleSubmitForm, isLoading }) => {
  return (
    <form className={styles['name']} onSubmit={handleSubmit(handleSubmitForm)}>
      <Input
        className={styles['name__input']}
        labelClassName={styles['name__input-label']}
        label="Name"
        {...register('fullName')}
        isDirty={!!name}
        error={errors.fullName?.message}
      />
      <Button className={styles['name__button']} isLoading={isLoading}>
        Save
      </Button>
    </form>
  );
};

export default Name;
