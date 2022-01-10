/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  const len = s.length;
  const next = new Array(len).fill(0);
  for (let i = 1, j = 0; i < len; i++) {
    while (j > 0 && s[i] !== s[j]) {
      // 如果不相等，我们要从不匹配的地方开始寻找
      // 不匹配的地方在哪里？
      // next 数组的值就代表每一次子串匹配好的长度
      j = next[j - 1];
    }
    if (s[i] === s[j]) {
      j++;
    }
    next[i] = j;
  }
  return next[len - 1] !== 0 && len % (len - next[len - 1]) === 0;
}
// @lc code=end
