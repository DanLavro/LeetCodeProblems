// Time Complexity: O(n)
//Space Complexity: O(n)
const sortedSquares = function (nums) {
  const n = nums.length;
  let result = new Array(n).fill(0);
  let left = 0,
    right = n - 1,
    pos = n - 1;

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[pos] = leftSquare;
      left += 1;
    } else {
      result[pos] = rightSquare;
      right -= 1;
    }

    pos -= 1;
  }

  return result;
};
