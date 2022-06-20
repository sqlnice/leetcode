/*
 * @lc app=leetcode.cn id=435 lang=typescript
 *
 * [435] 无重叠区间
 */

// @lc code=start
function eraseOverlapIntervals(intervals: number[][]): number {
  // 1.按右边界排序
  intervals.sort((a, b) => a[1] - b[1]);
  // 2.最大非重叠区间
  let count = 1;
  let end = intervals[0][1];
  // 3.从左往右遍历
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    // 区间开始比上一个区间结尾大，那么不相交
    if (interval[0] >= end) {
      end = interval[1];
      // 非重叠区间的数量加一
      count++;
    }
  }
  // 要去掉的重叠区间 = 总数 - 非重叠区间的数量
  return intervals.length - count;
}
// @lc code=end
