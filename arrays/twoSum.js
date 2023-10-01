// O(n)
const twoSum = function (nums, target) {
  const indices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (indices[complement] !== undefined) {
      return [indices[complement], i];
    }

    indices[nums[i]] = i;
  }
};

// O(n^2)
const twoSum_v1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// O(n log n)
const twoSum_v2 = function (nums, target) {
  const sortedNums = nums
    .map((num, idx) => ({ num, idx }))
    .sort((a, b) => a.num - b.num);
  let left = 0,
    right = sortedNums.length - 1;

  while (left < right) {
    const sum = sortedNums[left].num + sortedNums[right].num;
    if (sum === target) {
      return [sortedNums[left].idx, sortedNums[right].idx];
    }

    if (sum < target) left++;
    else right--;
  }
};
