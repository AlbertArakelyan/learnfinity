import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from 'components/index';

import { NavBarLinkPropsType } from './types';

import styles from './NavBarLink.module.scss';

const NavBarLink: FC<NavBarLinkPropsType> = ({ href, label, icon, isComingSoon }) => {
  return (
    <li
      className={`${styles['nav-bar__link-wrapper']} ${isComingSoon ? styles['nav-bar__link-wrapper--coming-soon'] : ''}`}
      title={isComingSoon ? 'Coming Soon' : undefined}
    >
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles['nav-bar__link']} ${styles['nav-bar__link--active']}` : styles['nav-bar__link']
        }
        to={href}
      >
        <div className={styles['nav-bar__link-icon-wrapper']}>
          <Icon className={styles['nav-bar__link-icon']} name={icon} />
        </div>
        <p className={styles['nav-bar__link-label']}>{label}</p>
        {isComingSoon && <Icon name="lock" className={styles['nav-bar__link-coming-soon-icon']} height="0.75rem" />}
      </NavLink>
    </li>
  );
};

export default NavBarLink;
