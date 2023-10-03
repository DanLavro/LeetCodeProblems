// Time Complexity: O(n log n)
// Space Complexity: O(n)
const heightChecker = function (heights) {
  let expected = [...heights].sort((a, b) => a - b);

  let mismatchCount = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      mismatchCount++;
    }
  }

  return mismatchCount;
};
