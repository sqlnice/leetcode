/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];
  // 1.前序排序
  intervals.sort((a, b) => a[0] - b[0]);
  let left = intervals[0][0],
    right = intervals[0][1];

  // 2.循环
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > right) {
      // 不重叠
      result.push([left, right]);
      left = intervals[i][0];
      right = intervals[i][1];
    } else {
      // 重叠情况，重置区间开头和结尾
      right = Math.max(intervals[i][1], right);
    }
  }
  result.push([left, right]);
  return result;
}
// @lc code=end
