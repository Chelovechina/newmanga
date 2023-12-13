export const checkSubset = (parentArray: number[], subsetArray: number[]) => {
  // Если массивы совпадают возвращает true, в противном случае false
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
};
