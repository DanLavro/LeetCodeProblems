function countBits(x) {
  let count = 0;
  while (x) {
    count += x & 1;
    x >>= 1;
  }
  return count;
}

// Time complexity: O(n log n)
// Space complexity: O(1)

function sortByBits(arr) {
  return arr.sort((a, b) => {
    const bitsA = countBits(a);
    const bitsB = countBits(b);
    if (bitsA === bitsB) {
      return a - b;
    } else {
      return bitsA - bitsB;
    }
  });
}
