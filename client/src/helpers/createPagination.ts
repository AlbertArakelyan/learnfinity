const createPagination = (pages: number) => {
  return Array.from(new Array(pages), (_, index) => index + 1);
};

export default createPagination;
