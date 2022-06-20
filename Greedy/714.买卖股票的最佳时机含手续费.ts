/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  let result: number = 0;

  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // 情况一：不买不卖。比最小值大，但是卖了又不赚钱
    if (prices[i] >= minPrice && prices[i] <= minPrice + fee) {
      continue;
    }

    // 情况二：买入
    if (prices[i] < minPrice) minPrice = prices[i];

    // 情况三：卖出

    if (prices[i] > minPrice + fee) {
      // 此时肯定有利润
      result += prices[i] - minPrice - fee;
      // 在当前计算利润后，下一次计算时就以此为最小值
      // 如果还在收获利润的区间里面，表示不是真正的卖出。而每次计算利润都要计算手续费，所以要再当前减去利润，在明天收获时就不会重复减去利润了
      minPrice = prices[i] - fee;
    }
  }

  return result;
}
// @lc code=end
