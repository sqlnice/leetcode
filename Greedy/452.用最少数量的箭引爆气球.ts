/*
 * @lc app=leetcode.cn id=452 lang=typescript
 *
 * [452] 用最少数量的箭引爆气球
 *  |
 *  |             此竖线为重叠气球最小右边界
 *  | ----线1-----|
 *  |   -----线2--|---           下一组重叠气球最小右边界
 *  |             | ----线3-----|
 *  |             |      ----线4|-----
 * X|                           |
 *  |---------------------------------------------
 *    Y
 * 1.排序
 * 2.初始化
 * 3.
 */

// @lc code=start
function findMinArrowShots(points: number[][]): number {
  if (!points.length) return 0;
  let result: number = 1; // 必有一支箭
  points.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < points.length; i++) {
    // 当前线开始小于等于前一条线的结束，则两条线相交
    if (points[i][0] <= points[i - 1][1]) {
      // 更新重叠气球最小右边界
      points[i][1] = Math.min(points[i][1], points[i - 1][1]);
      // 下次再循环的时候就是当前线的开始和上条线的最小右边界进行比较
    } else {
      // 不相交，则发射一只箭
      result++;
    }
  }
  return result;
}
// @lc code=end
