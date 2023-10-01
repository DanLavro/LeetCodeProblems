// O(n)
const lengthOfLastWord = function (s) {
  let length = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") i--;

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
};

// O(n)
const lengthOfLastWord_v1 = function (s) {
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
};
