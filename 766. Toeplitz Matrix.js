/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let add
  const matrixFirstLen = matrix[0].length
  const matrixLen = matrix.length
  // 直排
  for (let i = 0; i < matrixLen; i++) {
    add = 0
    while (add + i < matrixLen - 1 && add < matrixFirstLen - 1) {
      if (matrix[add + i][add] !== matrix[add + i + 1][add + 1]) { return false }
      add++
    }
  }

  // 橫排
  for (let i = 1; i < matrixFirstLen; i++) {
    add = 0
    while (add + i < matrixFirstLen - 1 && add < matrixLen - 1) {
      if (matrix[add][add + i] !== matrix[add + 1][add + i + 1]) { return false }
      add++
    }
  }

  return true
}
