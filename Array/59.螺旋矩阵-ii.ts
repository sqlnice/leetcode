/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * 模拟法
 * 时间复杂度O(N**2)
 */
function generateMatrix(n: number): number[][] {
  const result = Array.from({ length: n }).map(() => new Array(n));
  let num = 1,
    l = 0,
    r = n - 1,
    t = 0,
    b = n - 1; // 当前循环矩阵的四个边界

  while (num <= n ** 2) {
    // 从左到右
    for (let i = l; i <= r; i++) result[t][i] = num++;
    // 下一行
    t++;
    // 从上到下
    for (let i = t; i <= b; i++) result[i][r] = num++;
    r--;
    // 从右到左
    for (let i = r; i >= l; i--) result[b][i] = num++;
    b--;
    // 从下到上
    for (let i = b; i >= t; i--) result[i][l] = num++;
    l++;
  }
  return result;
}
// @lc code=end
