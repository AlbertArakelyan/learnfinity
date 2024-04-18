import { PropsWithChildren, JSX } from 'react';

import { DropdownPositionType } from 'types';

export interface IDropdownProps extends PropsWithChildren {
  triggerElement: JSX.Element;
  className?: string;
  wrapperClassName?: string;
  position?: DropdownPositionType;
  dropdownId?: string;
}
