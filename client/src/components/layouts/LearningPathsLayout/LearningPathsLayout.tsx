import { NavLink, Outlet } from 'react-router-dom';

import { LinkButton } from 'components';

import styles from './LearningPathsLayout.module.scss';

const LearningPathsLayout = () => {
  return (
    <div className={styles['learning-paths-layout']}>
      <div className={styles['learning-paths-layout__nav']}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles['learning-paths-layout__nav-link']} ${styles['learning-paths-layout__nav-link--active']}`
              : styles['learning-paths-layout__nav-link']
          }
          to="/"
        >
          <LinkButton className={styles['learning-paths-layout__nav-link-button']} variant="rounded">
            My Learning Paths
          </LinkButton>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles['learning-paths-layout__nav-link']} ${styles['learning-paths-layout__nav-link--active']}`
              : styles['learning-paths-layout__nav-link']
          }
          to="/shared"
        >
          <LinkButton className={styles['learning-paths-layout__nav-link-button']} variant="rounded">
            Shared Learning Paths
          </LinkButton>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default LearningPathsLayout;
