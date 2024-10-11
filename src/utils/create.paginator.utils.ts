export const createPaginator = (
array: any, pageNumber: number, totalItems: number, pageSize: number,) => {
  return {
    currentCount: array.length,
    totalCount: totalItems,
    page: pageNumber,
    items: pageSize,
    totalPage: Math.ceil(totalItems / pageSize),
    // atribute: atribute
  };
};
