import { FC } from 'react';

import { ILinkButtonProps } from './types';
import { Icon } from '../../shared';

const LinkButton: FC<ILinkButtonProps> = ({ icon, className = '', color, variant, children, ...props }) => {
  return (
    <button
      className={`base-link-button base-link-button--${variant} ${color ? `base-link-button--${color}` : ''} ${className}`}
      {...props}
    >
      {icon && <Icon className="base-link-button__icon" name={icon} width="1.125rem" height="1.125rem" />}
      <span className="base-link-button__text">{children}</span>
    </button>
  );
};

export default LinkButton;
