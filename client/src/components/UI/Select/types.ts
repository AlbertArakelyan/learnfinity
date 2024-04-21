import React, { PropsWithChildren } from 'react';

import { UseSelectContainerType } from './useSelectContainer';

import { IOptionProps } from '../Option/types';

export type SelectOnChangeType = (option: string | number) => void;

export interface ISelectContainerProps extends PropsWithChildren {
  selectedOption: string | number | null;
  selectedOptionContent?: React.ReactElement<IOptionProps, string | React.JSXElementConstructor<any>> | null;
  onChange: SelectOnChangeType;
  className?: string;
  wrapperClassName?: string;
  optionsListClassName?: string;
  labelClassName?: string;
  label?: string;
  error?: string;
}

export interface ISelectProps extends ISelectContainerProps, UseSelectContainerType {}
