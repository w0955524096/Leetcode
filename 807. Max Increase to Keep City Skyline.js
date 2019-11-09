/**
 * @param {number[][]} grid
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
var maxIncreaseKeepingSkyline = function (grid) {
  // eslint-disable-next-line camelcase,no-array-constructor
  const row_biggest = new Array()
  // eslint-disable-next-line camelcase,no-array-constructor
  const cell_biggest = new Array()
  for (let i = 0; i < grid.length; i++)// 行

  // eslint-disable-next-line brace-style
  {
    // eslint-disable-next-line camelcase
    let row_temp = 0
    // eslint-disable-next-line camelcase
    let cell_temp = 0
    for (let j = 0; j < grid[i].length; j++)// 列
    // eslint-disable-next-line brace-style
    {
      // eslint-disable-next-line camelcase
      if (grid[i][j] > row_temp) { row_temp = grid[i][j] }
      // eslint-disable-next-line camelcase
      if (grid[j][i] > cell_temp) { cell_temp = grid[j][i] }
    }

    row_biggest.push(row_temp)
    cell_biggest.push(cell_temp)
  }

  let result = 0
  // 換
  for (let i = 0; i < grid.length; i++)// 行

  {
    // eslint-disable-next-line camelcase
    let grid_i_j
    for (let j = 0; j < grid[i].length; j++)// 列
    // eslint-disable-next-line brace-style
    {
      // eslint-disable-next-line camelcase
      grid_i_j = grid[i][j]
      if (row_biggest[i] > grid[i][j]) { grid[i][j] = row_biggest[i] }

      if (grid[i][j] > cell_biggest[j]) { grid[i][j] = cell_biggest[j] }

      // eslint-disable-next-line camelcase
      result += (grid[i][j] - grid_i_j)
    }
  }

  console.log(grid)

  return result
}
