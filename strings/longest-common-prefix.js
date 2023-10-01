// O(n * m)
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};

// O(n * m * log n)
const longestCommonPrefix_v1 = function (strs) {
  if (!strs.length) return "";

  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) {
      return first.substring(0, i);
    }
  }

  return first;
};
