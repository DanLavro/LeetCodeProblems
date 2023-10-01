// O(rowIndex)
const getRow = function (rowIndex) {
  const row = new Array(rowIndex + 1).fill(1);

  for (let i = 1; i <= rowIndex; i++) {
    row[i] = (row[i - 1] * (rowIndex - i + 1)) / i;
  }

  return row;
};
