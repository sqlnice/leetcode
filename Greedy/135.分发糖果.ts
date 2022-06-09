/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */

// @lc code=start
function candy(ratings: number[]): number {
  if (!ratings.length) return 0;
  const candyVec = Array.from(ratings).fill(1);
  // 从前往后走一遍，只看后一个比前一个大的情况
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyVec[i] = candyVec[i - 1] + 1;
    }
  }
  // 从后往前走，只看前一个比后一个大的情况
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      // 由于这是第二次走，所以不能采取在后一个基础上 +1 ，要看之前和现在哪个最大，才能两边都符合
      candyVec[i] = Math.max(candyVec[i], candyVec[i + 1] + 1);
    }
  }
  return candyVec.reduce((a, b) => a + b);
}
// @lc code=end
