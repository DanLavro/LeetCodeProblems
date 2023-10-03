// Time Complexity: O(t.length)
// Space Complexity: O(1)
function isSubsequence(s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
      if (i === s.length) {
        return true;
      }
    }
    j++;
  }

  return i === s.length;
}
