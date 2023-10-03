// Time complexity: O(m * (n + log(m)))
// Space complexity: O(m)
function kWeakestRows(mat, k) {
  const m = mat.length;
  const strength = [];
  for (let i = 0; i < m; i++) {
    const numSoldiers = mat[i].reduce((acc, val) => acc + val, 0);
    strength.push([i, numSoldiers]);
  }

  strength.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(strength[i][0]);
  }

  return result;
}
