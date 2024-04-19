import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

import { VariantType } from 'types';
import { IconsKeysType } from 'components/shared/Icon/types';

export interface ILinkButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconsKeysType;
  variant?: VariantType;
}
