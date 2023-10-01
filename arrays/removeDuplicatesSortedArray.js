// O(n)
const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

// Using extra space - O(n)
const removeDuplicates_v1 = function (nums) {
  const uniqueNums = [];

  for (const num of nums) {
    if (!uniqueNums.includes(num)) {
      uniqueNums.push(num);
    }
  }

  for (let i = 0; i < uniqueNums.length; i++) {
    nums[i] = uniqueNums[i];
  }

  return uniqueNums.length;
};

// Using Set - O(n)
const removeDuplicates_v2 = function (nums) {
  const uniqueSet = new Set(nums);
  const uniqueNums = [...uniqueSet];

  for (let i = 0; i < uniqueNums.length; i++) {
    nums[i] = uniqueNums[i];
  }

  return uniqueNums.length;
};
