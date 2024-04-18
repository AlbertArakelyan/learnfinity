import { FC } from 'react';

import { IIconComponentProps } from '../types';

const Lock: FC<IIconComponentProps> = ({ color = 'currentColor', width = '0.875rem', height = '1rem', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 448 512" {...props}>
      <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
    </svg>
  );
};

export default Lock;
