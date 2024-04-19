import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from 'components';

import { IForgotPasswordProps } from './types';

const ForgotPassword: FC<IForgotPasswordProps> = ({
  isLoading,
  handleFormSubmit,
  register,
  handleSubmit,
  forgotPasswordData,
  errors,
  values,
}) => {
  return (
    <form className="auth-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="auth-form__title">Forgot Password</h2>
      <div className="auth-form__inputs">
        <Input
          wrapperClassName="auth-form__inputs"
          labelClassName="auth-form__input-label"
          label="Email"
          type="email"
          isDirty={!!values.email}
          error={errors.email?.message}
          {...register('email')}
        />
      </div>
      {forgotPasswordData && (
        <span className="auth-form__forgot-password-message">
          Reset password email has been sent to{' '}
          <span className="auth-form__forgot-password-email">{forgotPasswordData.email}</span>. Please check your email.
        </span>
      )}
      <div className="auth-from__controls">
        <div className="auth-from__controls-main">
          <Button className="auth-form__btn" btnColor="primary" isLoading={isLoading}>
            Send Email
          </Button>
          <Link className="auth-form__link" to="/auth">
            Log in
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassword;
