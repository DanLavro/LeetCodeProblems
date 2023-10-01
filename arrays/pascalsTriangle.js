// O(numRows^2)
const generate = function (numRows) {
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [];
    const prevRow = triangle[i - 1];

    row[0] = 1;

    for (let j = 1; j < i; j++) {
      row[j] = prevRow[j - 1] + prevRow[j];
    }

    row[i] = 1;
    triangle.push(row);
  }

  return triangle;
};

// O(numRows^2)
const generate_dp = function (numRows) {
  if (numRows === 0) return [];

  const triangle = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    triangle[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  return triangle;
};
