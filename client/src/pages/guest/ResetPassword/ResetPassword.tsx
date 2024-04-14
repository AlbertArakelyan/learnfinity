import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from 'components';

import { IResetPasswordProps } from './types';

const ResetPassword: FC<IResetPasswordProps> = ({
  isLoading,
  register,
  handleSubmit,
  handleFormSubmit,
  errors,
  values,
}) => {
  return (
    <form className="auth-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="auth-form__title">Reset Password</h2>
      <div className="auth-form__inputs">
        <Input
          wrapperClassName="auth-form__inputs"
          labelClassName="auth-form__input-label"
          label="Password"
          type="password"
          isDirty={!!values.password}
          error={errors.password?.message}
          {...register('password')}
        />
        <Input
          wrapperClassName="auth-form__inputs"
          labelClassName="auth-form__input-label"
          label="Confirm Password"
          type="password"
          isDirty={!!values.confirmPassword}
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
      </div>
      <div className="auth-from__controls">
        <div className="auth-from__controls-main">
          <Button className="auth-form__btn" btnColor="primary" isLoading={isLoading}>
            Reset Password
          </Button>
          <Link className="auth-form__link" to="/auth">
            Log in
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
