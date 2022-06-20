/*
 * @lc app=leetcode.cn id=738 lang=typescript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
function monotoneIncreasingDigits(n: number): number {
  const strn = String(n).split("").map(Number);
  // 从后往前遍历，如果 n[i - 1] > n[i]，那么 n[i - 1]--，n[i] = 9
  let flag = strn.length; // 标记从哪位开始赋值为9
  for (let i = strn.length - 1; i >= 0; i--) {
    if (strn[i - 1] > strn[i]) {
      strn[i - 1]--;
      flag = i;
    }
  }
  for (let i = flag; i < strn.length; i++) {
    strn[i] = 9;
  }
  return parseInt(strn.join(""));
}
// @lc code=end
