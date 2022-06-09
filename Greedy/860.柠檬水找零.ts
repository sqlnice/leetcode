/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  const cashPool: { [key in number]: number } = {
    5: 0,
    10: 0,
    20: 0,
  };
  // 模拟
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      cashPool[5]++;
    }
    if (bills[i] === 10) {
      cashPool[10]++;
      cashPool[5]--;
    }
    if (bills[i] === 20) {
      if (cashPool[10] > 0) {
        cashPool[10]--;
        cashPool[5]--;
      } else {
        cashPool[5] = cashPool[5] - 3;
      }
      cashPool[20]++;
    }
    if (cashPool[5] < 0 || cashPool[10] < 0 || cashPool[20] < 0) return false;
  }

  return true;
}
// @lc code=end
