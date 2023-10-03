function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Time Complexity: O(2^n)
// Space Complexity: O(2^n)
function allPossibleFBT(n) {
  if (n % 2 === 0) return [];

  if (n === 1) return [new TreeNode(0)];

  let trees = [];

  for (let i = 1; i < n; i += 2) {
    let leftSubtrees = allPossibleFBT(i);
    let rightSubtrees = allPossibleFBT(n - 1 - i);

    for (let left of leftSubtrees) {
      for (let right of rightSubtrees) {
        trees.push(new TreeNode(0, left, right));
      }
    }
  }

  return trees;
}
