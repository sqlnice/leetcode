/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  const sumSet = new Set()
  const handleN = (num: number): number => {
    if (num === 1 || num === 0) return n
    let res = 0
    // 开始快乐
    while (num) {
      // 个位数平方
      res += (num % 10) ** 2
      // 继续递归十位数
      num = Math.floor(num / 10)
    }
    return res
  }
  while (n !== 1 && !sumSet.has(n)) {
    sumSet.add(n)
    n = handleN(n)
  }
  return n === 1
};
// @lc code=end

