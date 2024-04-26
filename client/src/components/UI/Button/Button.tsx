import { FC } from 'react';

import { Loader, Icon } from 'components';

import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({
  className = '',
  btnColor = 'primary',
  variant = 'default',
  isLoading,
  children,
  disabled,
  icon,
  ...props
}) => {
  return (
    <button
      className={`base-button base-button--${btnColor} base-button--${variant} ${
        isLoading ? 'base-button--loading' : ''
      } ${className}`}
      tabIndex={isLoading || disabled ? -1 : 0}
      disabled={disabled || isLoading}
      {...props}
    >
      <div className={`base-button__content`}>
        {icon ? (
          <>
            <Icon className="base-button__icon" name={icon} width="1.125rem" height="1.125rem" />
            <span className="base-button__text">{children}</span>
          </>
        ) : (
          children
        )}
      </div>
      {isLoading && <Loader className="base-button__loader" size="small" />}
    </button>
  );
};

export default Button;
