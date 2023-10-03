// Time Complexity: O(n^2)
// Space Complexity: O(n)
const arithmeticTriplets = function (nums, diff) {
  let count = 0;
  const n = nums.length;
  const dp = Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] - nums[j] === diff) {
        count += dp[j];
        dp[i]++;
      }
    }
  }
  return count;
};
