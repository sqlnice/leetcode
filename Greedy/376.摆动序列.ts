/*
 * @lc app=leetcode.cn id=376 lang=typescript
 *
 * [376] 摆动序列
 */

// @lc code=start
// 贪心
// function wiggleMaxLength(nums: number[]): number {
//  if (nums.length <= 1) return nums.length;
//   // 默认最右边有一个峰值
//   let result = 1;
//   // 当前一对差值
//   let curDiff = 0;
//   // 前一对差值
//   let preDiff = 0;

//   for (let i = 0; i < nums.length; i++) {
//     curDiff = nums[i + 1] - nums[i];
//     // 出现峰值
//     if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
//       preDiff = curDiff;
//       result++;
//     }
//   }
//   return result;
// }
// 动态规划
function wiggleMaxLength(nums: number[]): number {
  const length: number = nums.length;
  if (length <= 1) return length;
  const dp: number[][] = new Array(length).fill(0).map((_) => []);
  dp[0][0] = 1; // 第一个数作为波峰
  dp[0][1] = 1; // 第一个数作为波谷
  for (let i = 1; i < length; i++) {
    dp[i][0] = 1;
    dp[i][1] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
    }
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
    }
  }
  return Math.max(dp[length - 1][0], dp[length - 1][1]);
}
// @lc code=end
