// O(n)
const titleToNumber = function (columnTitle) {
  let result = 0;
  let multiplier = 1;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const digit = columnTitle.charCodeAt(i) - 64;
    result += digit * multiplier;
    multiplier *= 26;
  }

  return result;
};
