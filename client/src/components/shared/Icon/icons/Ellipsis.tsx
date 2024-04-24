import { FC } from 'react';

import { IIconComponentProps } from '../types';

const Ellipsis: FC<IIconComponentProps> = ({
  color = 'currentColor',
  width = '0.875rem',
  height = '1rem',
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 448 512" {...props}>
      <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </svg>
  );
};

export default Ellipsis;
