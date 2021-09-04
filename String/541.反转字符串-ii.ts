/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  const resArr = s.split("")
  const length = resArr.length
  for(let i = 0; i < resArr.length; i += 2*k) {
    // 反转前k个
    // 双指针
    let l = i - 1, r = i + k > length ? length : i + k
    while (++l < --r) {
      [resArr[l],resArr[r]] = [resArr[r],resArr[l]]
    }
  }
  return resArr.join("")
};
// @lc code=end

