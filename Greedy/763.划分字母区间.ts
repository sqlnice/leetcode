/*
 * @lc app=leetcode.cn id=763 lang=typescript
 *
 * [763] 划分字母区间
 */

// @lc code=start
// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0763.%E5%88%92%E5%88%86%E5%AD%97%E6%AF%8D%E5%8C%BA%E9%97%B4.md
function partitionLabels(s: string): number[] {
  // 1.先遍历每个字符，确定出现的最远地方
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }
  let left = 0,
    right = 0,
    result = [];
  // 2.从头遍历字符，并更新字符的最远出现下标，如果找到字符最远出现位置下标和当前下标相等了，则找到了分割点
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, map.get(s[i]));
    if (right === i) {
      result.push(right - left + 1);
      left = i + 1;
    }
  }
  return result;
}
// @lc code=end
