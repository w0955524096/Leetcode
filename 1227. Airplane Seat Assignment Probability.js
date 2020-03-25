/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function (n) {
  const dp = new Array(n)

  dp[1] = 1
  dp[2] = 0.5
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] * (i - 1) + dp[i - 1]) / i
  }

  return dp[n]
}
