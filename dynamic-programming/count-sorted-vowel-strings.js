// Time Complexity: O(n)
// Space Complexity: O(n)
const countVowelStrings = function (n) {
  const dp = new Array(n).fill(0).map(() => new Array(5).fill(0));

  for (let j = 0; j < 5; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < n; i++) {
    dp[i][0] =
      dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3] + dp[i - 1][4];
    dp[i][1] = dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3] + dp[i - 1][4];
    dp[i][2] = dp[i - 1][2] + dp[i - 1][3] + dp[i - 1][4];
    dp[i][3] = dp[i - 1][3] + dp[i - 1][4];
    dp[i][4] = dp[i - 1][4];
  }

  return dp[n - 1].reduce((acc, val) => acc + val, 0);
};
