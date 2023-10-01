class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// O(n)
const sortedArrayToBST = function (nums) {
  return buildBST(nums, 0, nums.length - 1);
};

const buildBST = function (nums, left, right) {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);
  const node = new TreeNode(nums[mid]);

  node.left = buildBST(nums, left, mid - 1);
  node.right = buildBST(nums, mid + 1, right);

  return node;
};
