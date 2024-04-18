import { FC } from 'react';

import { Icon } from 'components';

import { ILogoutButtonProps } from './types';

import styles from './LogoutButton.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const LogoutButton: FC<ILogoutButtonProps> = ({ onClick = () => {} }) => {
  return (
    <button className={styles['header__logout-button']} onClick={onClick}>
      <Icon name="logout" width="1.125rem" height="1.125rem" />
      <span className={styles['header__logout-button-text']}>Logout</span>
    </button>
  );
};

export default LogoutButton;
