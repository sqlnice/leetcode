/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let l = -1,
    r = s.length;
  while (++l < --r) {
    [s[l], s[r]] = [s[r], s[l]];
  }
}
// @lc code=end
