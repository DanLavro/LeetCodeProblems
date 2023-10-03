// Time complexity: O(1)
// complexity: O(1)

function minSum(num) {
  const digits = Array.from(String(num), Number).sort((a, b) => a - b);
  let new1 = 0;
  let new2 = 0;

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      new1 = new1 * 10 + digits[i];
    } else {
      new2 = new2 * 10 + digits[i];
    }
  }

  return new1 + new2;
}
