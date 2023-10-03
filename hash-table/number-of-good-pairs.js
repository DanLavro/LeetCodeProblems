// O(n)
const numIdenticalPairs = function (nums) {
  const freqMap = {};
  let goodPairs = 0;

  for (const num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  for (const count of Object.values(freqMap)) {
    goodPairs += (count * (count - 1)) / 2;
  }

  return goodPairs;
};

// O(n)
const numIdenticalPairs_v1 = function (nums) {
  const freqMap = new Map();
  let goodPairs = 0;

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (const count of freqMap.values()) {
    goodPairs += (count * (count - 1)) / 2;
  }

  return goodPairs;
};
