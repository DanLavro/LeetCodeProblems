// O(n)
const isValid = function (s) {
  const stack = [];
  const mappings = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (mappings[char]) {
      const topElement = stack.length === 0 ? "#" : stack.pop();
      if (topElement !== mappings[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
