/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const stack: string[] = [];
  for (const x of s) {
    let c = null;
    if (stack.length && x === (c = stack.pop())) continue;
    c && stack.push(c);
    stack.push(x);
  }
  return stack.join('');
}

removeDuplicates('abbaca');
// @lc code=end
