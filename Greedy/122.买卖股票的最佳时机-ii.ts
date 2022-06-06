/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 * 利润拆分，只收集每天的正利润，最后就是最大利润
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let result: number = 0;
  for (let i = 1; i < prices.length; i++) {
    result += Math.max(prices[i] - prices[i - 1], 0);
  }
  return result;
}
// @lc code=end
