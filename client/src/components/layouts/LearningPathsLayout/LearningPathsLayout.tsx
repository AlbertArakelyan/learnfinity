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
          to="/learning-paths"
          end
        >
          <LinkButton className={styles['learning-paths-layout__nav-link-button']} variant="rounded" icon="laptop-file">
            My Learning Paths
          </LinkButton>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles['learning-paths-layout__nav-link']} ${styles['learning-paths-layout__nav-link--active']}`
              : styles['learning-paths-layout__nav-link']
          }
          to="/learning-paths/shared"
          end
        >
          <LinkButton className={styles['learning-paths-layout__nav-link-button']} variant="rounded" icon="user-group">
            Shared Learning Paths
          </LinkButton>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles['learning-paths-layout__nav-link']} ${styles['learning-paths-layout__nav-link--active']}`
              : styles['learning-paths-layout__nav-link']
          }
          to="/learning-paths/public"
          end
        >
          <LinkButton className={styles['learning-paths-layout__nav-link-button']} variant="rounded" icon="globe">
            Public Learning Paths
          </LinkButton>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default LearningPathsLayout;
