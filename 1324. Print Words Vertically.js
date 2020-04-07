/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  let splitStr = s.split(' ')

  splitStr.sort(function (a, b) { return b.length - a.length })

  const innerLen = splitStr[0].length

  const outerLen = splitStr.length

  const out = new Array(innerLen).fill('')

  splitStr = s.split(' ')

  for (let i = 0; i < innerLen; i++) {
    for (let j = 0; j < outerLen; j++) {
      if (!splitStr[j][i]) { out[i] += ' ' } else { Out[i] += splitStr[j][i] }
    }
    out[i] = out[i].replace(/([\s]*$)/g, '')
  }

  return out
}
