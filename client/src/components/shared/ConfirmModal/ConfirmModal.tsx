import { FC } from 'react';

import { Modal, Button, Loader } from 'components';

import { IConfirmModalProps } from './types';

const ConfirmModal: FC<IConfirmModalProps> = ({
  title = 'Confirm Action',
  description = 'Are you sure you want to perform this action?',
  isOpen,
  isLoading,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal title={title} isOpen={isOpen} onClose={onCancel}>
      <div className="confirm-modal">
        <p className="confirm-modal__description">{description}</p>
        <div className="confirm-modal__actions">
          <Button className="confirm-modal__cancel" btnColor="primary" onClick={onCancel}>
            Cancel
          </Button>
          <Button className="confirm-modal__confirm" btnColor="danger" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
        {isLoading && (
          <div className="confirm-modal__loader">
            <Loader />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ConfirmModal;
