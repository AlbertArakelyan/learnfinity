import { FC } from 'react';

import { IIconComponentProps } from '../types';

const Plus: FC<IIconComponentProps> = ({ color = 'currentColor', width = '0.875rem', height = '1rem', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 448 512" {...props}>
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
    </svg>
  );
};

export default Plus;
