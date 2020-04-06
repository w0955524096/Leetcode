/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  let SplitS = s.split(' ')

  SplitS.sort(function (a, b) { return b.length - a.length })

  const InLen = SplitS[0].length

  const OutLen = SplitS.length

  const Out = new Array(InLen).fill('')

  SplitS = s.split(' ')

  for (let i = 0; i < InLen; i++) {
    for (let j = 0; j < OutLen; j++) {
      if (!SplitS[j][i]) { Out[i] += ' ' } else { Out[i] += SplitS[j][i] }
    }
    Out[i] = Out[i].replace(/([\s]*$)/g, '')
  }

  return Out
}
