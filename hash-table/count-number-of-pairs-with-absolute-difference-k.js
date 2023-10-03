// Time Complexity: O(n)
// Space Complexity: O(n)
const countKDifference = function (nums, k) {
  const numFrequency = {};
  let pairCount = 0;

  for (const num of nums) {
    numFrequency[num] = (numFrequency[num] || 0) + 1;
  }

  for (const num in numFrequency) {
    if (numFrequency[+num + k]) {
      pairCount += numFrequency[num] * numFrequency[+num + k];
    }
  }

  return pairCount;
};
