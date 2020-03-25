/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function (n) {
  const dp = new Array(n)

  dp[1] = 1 / 1

  for (let i = 2; i <= n; i++) {
    dp[i] = 1 / i + (i - 2) / i * dp[i - 1]
  }

  return dp[n]
}
