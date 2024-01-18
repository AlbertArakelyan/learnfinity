const { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_LIMIT } = require('../constants/global');

function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}

function getPaginatedDate(data, page, limit) {
 const totalItems = data.length;
 const totalPages = Math.ceil(totalItems / limit);

 return {
   data,
   pageInfo: {
     page,
     limit,
     totalItems,
     totalPages,
     hasNextPage: page < totalPages,
     hasPrevPage: page > 1,
     nextPage: page + 1,
     prevPage: page - 1,
     lastPage: totalPages,
     // TODO rework
     nextPageUrl: `/api/groups?page=${page + 1}&limit=${limit}`,
     prevPageUrl: `/api/groups?page=${page - 1}&limit=${limit}`,
   }
 }
}

module.exports = {
  getPagination,
  getPaginatedDate,
};