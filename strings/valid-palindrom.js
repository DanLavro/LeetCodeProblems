// O(n)
const isPalindrome = function (s) {
  const alphanumericString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let start = 0;
  let end = alphanumericString.length - 1;
  while (start < end) {
    if (alphanumericString[start] !== alphanumericString[end]) return false;
    start++;
    end--;
  }

  return true;
};

// O(n)
const isPalindrome_v1 = function (s) {
  const alphanumericString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return alphanumericString === alphanumericString.split("").reverse().join("");
};
