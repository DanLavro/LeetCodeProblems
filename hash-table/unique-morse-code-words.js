// Time complexity: O(N*M)
// Space complexity: O(N)

function uniqueMorseRepresentations(words) {
  const morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const transformations = new Set();

  words.forEach((word) => {
    let morseWord = "";
    for (let char of word) {
      morseWord += morseCode[char.charCodeAt(0) - "a".charCodeAt(0)];
    }
    transformations.add(morseWord);
  });

  return transformations.size;
}
