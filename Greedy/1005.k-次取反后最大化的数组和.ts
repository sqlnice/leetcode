/*
 * @lc app=leetcode.cn id=1005 lang=typescript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
function largestSumAfterKNegations(nums: number[], k: number): number {
  // 1.按照绝对值从大到小排序
  // 2.循环，把负数变为正数
  nums.sort((a: number, b: number) => Math.abs(b) - Math.abs(a));
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1;
      k--;
    }
  }
  // 3.遍历结束，未达到 k，翻转数值最小的元素
  if (k % 2) {
    nums[nums.length - 1] *= -1;
  }
  return nums.reduce((pre, cur) => (pre += cur), 0);
}
// @lc code=end
