import { createPagination } from 'helpers';

const usePaginationContainer = (totalPages: number) => {
  const pagination = createPagination(totalPages);

  return {
    pagination,
  };
};

export type UsePaginationContainerType = ReturnType<typeof usePaginationContainer>;

export default usePaginationContainer;
