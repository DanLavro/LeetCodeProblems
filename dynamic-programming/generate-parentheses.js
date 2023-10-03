// O(n) time and O(n) space
function generateParenthesis(n) {
  const result = [];

  function backtrack(s, left, right) {
    if (left === n && right === n) {
      result.push(s);
      return;
    }

    if (left < n) {
      backtrack(s + "(", left + 1, right);
    }

    if (right < left) {
      backtrack(s + ")", left, right + 1);
    }
  }

  backtrack("", 0, 0);

  return result;
}
