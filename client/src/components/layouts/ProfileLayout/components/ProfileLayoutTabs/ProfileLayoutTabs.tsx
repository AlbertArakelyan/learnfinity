import { Link, Navigate, NavLink } from 'react-router-dom';

import { LinkButton } from 'components';

import styles from './ProfileLayoutTabs.module.scss';

const ProfileLayoutTabs = () => {
  return (
    <ul className={styles['profile-layout__tabs']}>
      <li className={styles['profile-layout__tab']}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles['profile-layout__tab-link']} ${styles['profile-layout__tab-link--active']}`
              : styles['profile-layout__tab-link']
          }
          to="/profile/name"
          end
        >
          <LinkButton className={styles['profile-layout__tab-link-button']}>Name</LinkButton>
        </NavLink>
      </li>
      <li className={styles['profile-layout__tab']}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles['profile-layout__tab-link']} ${styles['profile-layout__tab-link--active']}`
              : styles['profile-layout__tab-link']
          }
          to="/profile/avatar"
          end
        >
          <LinkButton className={styles['profile-layout__tab-link-button']}>Avatar</LinkButton>
        </NavLink>
      </li>
      <li className={styles['profile-layout__tab']}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles['profile-layout__tab-link']} ${styles['profile-layout__tab-link--active']}`
              : styles['profile-layout__tab-link']
          }
          to="/profile/password"
          end
        >
          <LinkButton className={styles['profile-layout__tab-link-button']}>Password</LinkButton>
        </NavLink>
      </li>
      <li className={`${styles['profile-layout__tab']} ${styles['profile-layout__tab--delete']}`}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles['profile-layout__tab-link']} ${styles['profile-layout__tab-link--active']}`
              : styles['profile-layout__tab-link']
          }
          to="/profile/delete"
          end
        >
          <LinkButton className={styles['profile-layout__tab-link-button']}>Delete Account</LinkButton>
        </NavLink>
      </li>
    </ul>
  );
};

export default ProfileLayoutTabs;
