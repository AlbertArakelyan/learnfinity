import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Avatar } from 'components';
import { ProfileLayoutTabs } from './components';

import { IProfileLayoutProps } from './types';

import styles from './ProfileLayout.module.scss';

const ProfileLayout: FC<IProfileLayoutProps> = ({ user }) => {
  return (
    <div className={styles['profile-layout']}>
      {user && (
        <div className={styles['profile-layout__user-data']}>
          <Avatar src={user.photoUrl} size="lg" />
          <span className={styles['profile-layout__user-full-name']}>{user.fullName}</span>
        </div>
      )}
      <div className={styles['profile-layout__content']}>
        <ProfileLayoutTabs />
        <div className={styles['profile-layout__inner']}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
