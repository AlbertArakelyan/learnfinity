import { FC } from 'react';

import { IPaginationProps } from './types';

const Pagination: FC<IPaginationProps> = ({ paginationContent, className = '' }) => {
  return <ul className={`base-pagination ${className}`}>{paginationContent}</ul>;
};

export default Pagination;
