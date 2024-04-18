import { FC } from 'react';

import { IDropdownProps } from './types';

const Dropdown: FC<IDropdownProps> = ({
  triggerElement,
  wrapperClassName = '',
  className = '',
  position = 'bottom-right',
  dropdownId,
  children,
}) => {
  return (
    <div
      className={`base-dropdown-wrapper ${wrapperClassName}`}
      tabIndex={0}
      aria-label="Profile actions"
      aria-controls={dropdownId}
      aria-owns={dropdownId}
      role="combobox"
    >
      {triggerElement}
      {/*TODO remove listbox if it is used in other cases too*/}
      <div className={`base-dropdown base-dropdown--${position} ${className}`} id={dropdownId} role="listbox">
        <div className="base-dropdown__content">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
