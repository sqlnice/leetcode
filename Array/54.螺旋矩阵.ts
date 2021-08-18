/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let l = 0,
    r = matrix[0].length - 1,
    t = 0,
    b = matrix.length - 1; // 上下左右四个边界
  const result = new Array();
  while (true) {
    // 从左到右
    for (let i = l; i <= r; i++) result.push(matrix[t][i]);
    if (++t > b) break;
    // 从上到下
    for (let i = t; i <= b; i++) result.push(matrix[i][r]);
    if (--r < l) break;
    // 从右到左
    for (let i = r; i >= l; i--) result.push(matrix[b][i]);
    if (--b < t) break;
    // 从下到上
    for (let i = b; i >= t; i--) result.push(matrix[i][l]);
    if (++l > r) break;
  }
  console.log(result);
  return result;
}
// @lc code=end
