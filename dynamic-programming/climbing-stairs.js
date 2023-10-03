// Time Complexity: O(n)
// Space Complexity: O(1)
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let oneStepBefore = 2;
  let twoStepsBefore = 1;

  for (let i = 3; i <= n; i++) {
    let current = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = current;
  }

  return oneStepBefore;
}
