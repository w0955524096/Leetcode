/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') { return '0' }

  const out = new Array(num1.length + num2.length).fill(0)
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      out[i + j + 1] += num1[i] * num2[j]
    }
  }

  for (let i = out.length - 1; i >= 0; i--) {
    out[i - 1] += Math.floor(out[i] / 10)
    out[i] %= 10
  }
  // 進位最左為0就去掉
  if (out[0] === 0)out[0] = ''

  return out.join('')
}
