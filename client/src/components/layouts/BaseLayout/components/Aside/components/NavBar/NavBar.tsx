import { FC } from 'react';

import { Button, Modal, CreateLearningPathModal } from 'components';

import { INavBarProps } from './types';

import styles from './NavBar.module.scss';

const NavBar: FC<INavBarProps> = ({ navLinksContent }) => {
  return (
    <nav className={styles['nav-bar']}>
      <div className={styles['nav-bar__add-button-wrapper']}>
        <Button variant="rounded">+ Add Path</Button>
      </div>
      <ul className={styles['nav-bar__links']}>{navLinksContent}</ul>
      <Modal isOpen={true} title="Create Learning Path">
        <CreateLearningPathModal />
      </Modal>
    </nav>
  );
};

export default NavBar;
