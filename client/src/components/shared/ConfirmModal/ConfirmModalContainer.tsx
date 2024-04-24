import { FC } from 'react';

import ConfirmModal from './ConfirmModal';

import { IConfirmModalProps } from './types';

const ConfirmModalContainer: FC<IConfirmModalProps> = ({
  title,
  description,
  isOpen,
  isLoading,
  onConfirm,
  onCancel,
}) => {
  return (
    <ConfirmModal
      title={title}
      description={description}
      isOpen={isOpen}
      isLoading={isLoading}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default ConfirmModalContainer;
