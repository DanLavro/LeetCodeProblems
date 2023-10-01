// O((n - m + 1) * m)
const strStr = function (haystack, needle) {
  if (needle === "") return 0;

  const n = haystack.length;
  const m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && haystack[i + j] === needle[j]) j++;
    if (j === m) return i;
  }

  return -1;
};

// O(n * m)
const strStr_v1 = function (haystack, needle) {
  return haystack.indexOf(needle);
};
