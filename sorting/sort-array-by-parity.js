// Time Complexity: O(n)
// Space Complexity: O(1)
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] % 2 !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right -= 1;
    } else {
      left += 1;
    }
  }

  return nums;
};
