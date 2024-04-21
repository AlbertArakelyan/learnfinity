import { ReactNode } from 'react';

import { UsePaginationContainerType } from './usePaginationContainer';
import { PaginationItemSizeType } from 'types';

export interface IPaginationContainerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  pageClassName?: string;
  activePageClassName?: string;
  size?: PaginationItemSizeType;
}

export interface IPaginationProps {
  paginationContent: ReactNode[];
  className?: string;
}
