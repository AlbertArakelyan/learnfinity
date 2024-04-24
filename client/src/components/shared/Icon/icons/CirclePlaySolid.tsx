import { FC } from 'react';

import { IIconComponentProps } from '../types';

const CirclePlaySolid: FC<IIconComponentProps> = ({
  color = 'currentColor',
  width = '1rem',
  height = '1rem',
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 512 512" {...props}>
      <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
    </svg>
  );
};

export default CirclePlaySolid;
