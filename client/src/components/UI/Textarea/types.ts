import { TextareaHTMLAttributes } from 'react';

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperClassName?: string;
  labelClassName?: string;
  label?: string;
  error?: string;
  isDirty?: boolean;
}
