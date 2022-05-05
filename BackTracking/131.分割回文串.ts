/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start
function partition(s: string): string[][] {
  const result: string[][] = [];
  const backTracking = (s: string, startIndex: number, path: string[]) => {
    // 终止条件
    if (startIndex >= s.length) {
      result.push(path.slice());
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      // 是否为回文串
      if (!isPalindromic(s, startIndex, i)) continue;
      path.push(s.slice(startIndex, i + 1));
      backTracking(s, i + 1, path);
      path.pop();
    }
  };
  const isPalindromic = (s: string, l: number, r: number) => {
    // 双指针
    while (l < r) {
      if (s[l++] !== s[r--]) {
        return false;
      }
    }
    return true;
  };
  backTracking(s, 0, []);
  return result;
}
// @lc code=end
