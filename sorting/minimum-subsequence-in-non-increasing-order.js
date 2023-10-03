// Time Complexity: O(n log n)
// Space Complexity: O(1)

function minSubsequence(nums) {
  nums.sort((a, b) => b - a);

  const totalSum = nums.reduce((acc, val) => acc + val, 0);

  let subsequenceSum = 0;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i]);
    subsequenceSum += nums[i];

    if (subsequenceSum > totalSum - subsequenceSum) {
      break;
    }
  }

  return result;
}
