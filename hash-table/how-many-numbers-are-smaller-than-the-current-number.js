// O(n + m)
const smallerNumbersThanCurrent = function (nums) {
  const count = new Array(101).fill(0); // m

  // O(n)
  for (const num of nums) {
    count[num]++;
  }

  // O(m)
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // O(n)
  return nums.map((num) => (num === 0 ? 0 : count[num - 1]));
};
