import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IVerifyEmailProps } from './types';

const VerifyEmail: FC<IVerifyEmailProps> = ({ isVerificationPassed }) => {
  return (
    <div className="auth-form">
      <h2 className="auth-form__title">Email Verification</h2>
      <div className="auth-form__verification-container">
        <p
          className={`auth-form__verification-text ${isVerificationPassed ? '' : 'auth-form__verification-text--error'}`}
        >
          {isVerificationPassed ? 'Your email is successfully verified.' : 'Email verification is failed.'}
        </p>
        <Link className="auth-form__link" to="/auth">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
