import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { ColorType, VariantType } from 'types';
import { IconsKeysType } from 'components/shared/Icon/types';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  isLoading?: boolean;
  btnColor?: ColorType;
  icon?: IconsKeysType;
}
