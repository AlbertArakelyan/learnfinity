import { FC } from 'react';

import Modal from './Modal';

import useModalContainer from './useModalContainer';

import { IModalContainerProps } from './types';

const ModalContainer: FC<IModalContainerProps> = ({ title, isOpen, onClose, children }) => {
  useModalContainer(isOpen);

  // TODO move isOpen check into the View component
  return isOpen ? (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      {children}
    </Modal>
  ) : null;
};

export default ModalContainer;
