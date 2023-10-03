// Time complexity: O(n)
// Space complexity: O(1)
function numRodsWithAllRings(rings) {
  const rods = Array.from({ length: 10 }, () => new Set());

  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const rod = parseInt(rings[i + 1], 10);
    rods[rod].add(color);
  }

  let count = 0;
  for (let rod of rods) {
    if (rod.size === 3) count++;
  }

  return count;
}
