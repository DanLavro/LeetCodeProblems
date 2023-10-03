// Time Complexity: O(n)
// Space Complexity: O(n)
function countBits(n) {
  let bits = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i >> 1] + (i & 1);
  }

  return bits;
}
