export interface IConfirmModalContainerProps {
  title?: string;
  description?: string;
  isOpen?: boolean;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export type IConfirmModalProps = IConfirmModalContainerProps;
