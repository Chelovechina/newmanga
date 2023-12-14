export const checkSubset = (parentArray: number[], subsetArray: number[]) => {
  // Если массивы совпадают возвращает true, в противном случае false
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
};

export const findItemById = <T extends { id: number }>(
  array: T[],
  id: number
) => {
  return array.find((item) => item.id === id);
};
