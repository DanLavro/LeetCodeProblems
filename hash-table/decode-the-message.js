// O(n)
const decodeMessage = function (key, message) {
  const map = new Map();
  const seen = new Set();

  for (let char of key) {
    if (char !== " " && !seen.has(char)) {
      map.set(char, String.fromCharCode(97 + seen.size));
      seen.add(char);
    }
  }

  let decodedMessage = "";
  for (let char of message) {
    if (char === " ") {
      decodedMessage += " ";
    } else {
      decodedMessage += map.get(char);
    }
  }

  return decodedMessage;
};
