/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  let result: number = 0;
  // 饼干下标
  let j = s.length - 1;

  // 1.排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  // 2.都从从尾部循环，先满足胃口最大的
  for (let i = g.length - 1; i >= 0; i--) {
    if (j >= 0 && s[j] >= g[i]) {
      result++;
      j--;
    }
  }
  return result;
}
// @lc code=end
