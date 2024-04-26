import { FC } from 'react';

import { IIconComponentProps } from '../types';

const ArrowUpFromBracket: FC<IIconComponentProps> = ({
  color = 'currentColor',
  width = '0.875rem',
  height = '1rem',
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 448 512" {...props}>
      <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z" />
    </svg>
  );
};

export default ArrowUpFromBracket;
