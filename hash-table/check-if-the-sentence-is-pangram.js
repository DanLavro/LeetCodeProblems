// Time Complexity: O(n)
// Space Complexity: O(1)
const checkIfPangram = function (sentence) {
  const alphabetSet = new Set();

  for (const char of sentence) {
    alphabetSet.add(char);
    if (alphabetSet.size === 26) {
      return true;
    }
  }

  return false;
};
