import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

import { VariantType, ColorType } from 'types';
import { IconsKeysType } from 'components/shared/Icon/types';

export interface ILinkButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconsKeysType;
  variant?: VariantType;
  color?: ColorType;
}
