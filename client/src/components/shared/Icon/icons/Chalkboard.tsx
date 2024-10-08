import { FC } from 'react';

import { IIconComponentProps } from '../types';

const Chalkboard: FC<IIconComponentProps> = ({
  color = 'currentColor',
  width = '1.125rem',
  height = '1rem',
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={width} width={height} fill={color} viewBox="0 0 576 512" {...props}>
      <path d="M96 32C60.7 32 32 60.7 32 96V384H96V96l384 0V384h64V96c0-35.3-28.7-64-64-64H96zM224 384v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H416V384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32z" />
    </svg>
  );
};

export default Chalkboard;
