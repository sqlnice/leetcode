/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  // const stack = [];
  // for (let i = 0; i < s.length; i++) {
  //   const c = s[i];
  //   switch (c) {
  //     case '(':
  //       stack.push(')');
  //       break;
  //     case '[':
  //       stack.push(']');
  //       break;
  //     case '{':
  //       stack.push('}');
  //       break;
  //     default:
  //       if (c !== stack.pop()) return false;
  //       break;
  //   }
  // }
  // return stack.length === 0;

  const stack: string[] = [];
  const map: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (const x of s) {
    if (x in map) {
      stack.push(x);
      continue;
    }
    if (map[stack.pop()] !== x) return false;
  }
  return !stack.length;
}
// @lc code=end
