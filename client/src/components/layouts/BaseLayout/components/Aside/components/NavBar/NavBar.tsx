import { FC } from 'react';

import { Button, Modal, CreateLearningPathModal } from 'components';

import { INavBarProps } from './types';

import styles from './NavBar.module.scss';

const NavBar: FC<INavBarProps> = ({
  navLinksContent,
  isCreateLearningPathModalOpen,
  handleCreateButtonClick,
  handleClose,
}) => {
  return (
    <nav className={styles['nav-bar']}>
      <div className={styles['nav-bar__add-button-wrapper']}>
        <Button variant="rounded" onClick={handleCreateButtonClick}>
          + Add Path
        </Button>
      </div>
      <ul className={styles['nav-bar__links']}>{navLinksContent}</ul>
      <Modal isOpen={isCreateLearningPathModalOpen} title="Create Learning Path" onClose={handleClose}>
        <CreateLearningPathModal />
      </Modal>
    </nav>
  );
};

export default NavBar;
