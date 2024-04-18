import { FC } from 'react';

import { SearchBar, LogoutButton } from './components';
import { Avatar, Dropdown } from 'components';

import { IHeaderProps } from './types';

import styles from './Header.module.scss';

const Header: FC<IHeaderProps> = ({ user }) => {
  return (
    <header className={styles['header']}>
      <SearchBar />
      <div className={styles['header__user-info']}>
        <span className={styles['header__user-full-name']}>{user?.fullName}</span>
        <Dropdown
          triggerElement={<Avatar src={user?.photoUrl} size="md" imageSize={200} />}
          dropdownId="avatar-dropdown"
          className={styles['header__avatar']}
        >
          <LogoutButton />
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
