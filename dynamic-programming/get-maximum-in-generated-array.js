// Time Complexity: O(n)
// Space Complexity: O(n)
function getMaximumGenerated(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let nums = new Array(n + 1).fill(0);
  nums[1] = 1;
  let maxNum = 1;

  for (let i = 2; i <= n; i++) {
    nums[i] = nums[Math.floor(i / 2)];
    if (i % 2 !== 0) {
      nums[i] += nums[Math.floor(i / 2) + 1];
    }

    maxNum = Math.max(maxNum, nums[i]);
  }

  return maxNum;
}
