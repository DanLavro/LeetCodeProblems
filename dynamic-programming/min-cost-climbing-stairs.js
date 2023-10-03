// Time Complexity: O(n)
// Space Complexity: O(1)
function minCostClimbingStairs(cost) {
  let prevCost = 0;
  let currentCost = 0;

  for (let i = 2; i <= cost.length; i++) {
    let newCost = Math.min(currentCost + cost[i - 1], prevCost + cost[i - 2]);
    prevCost = currentCost;
    currentCost = newCost;
  }

  return currentCost;
}
