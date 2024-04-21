import { FC } from 'react';

import Pagination from './Pagination';

import usePaginationContainer from './usePaginationContainer';

import { IPaginationContainerProps } from './types';

const PaginationContainer: FC<IPaginationContainerProps> = ({
  totalPages,
  currentPage,
  className,
  pageClassName = '',
  activePageClassName = '',
  size = 'md',
  onPageChange,
}) => {
  const { pagination } = usePaginationContainer(totalPages);

  console.log('totalPages', totalPages);

  const paginationContent = pagination.map((page) => {
    return (
      <li
        className={`base-pagination__page ${pageClassName} ${currentPage === page ? `base-pagination__page--active ${activePageClassName}` : ''} base-pagination__page--${size}`}
        key={page}
        value={page}
        onClick={(e) => onPageChange(Number(e.currentTarget.value))}
      >
        {page}
      </li>
    );
  });

  return <Pagination paginationContent={paginationContent} className={className} />;
};

export default PaginationContainer;
