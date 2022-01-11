/*
 *
 * 剑指Offer 05.替换空格
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1： 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

// @lc code=start
function replaceSpace(s: string): string {
  const arr = Array.from(s);
  let count = 0;
  for (const item of arr) {
    if (item === ' ') count++;
  }
  // 从尾巴开始添加
  let l = arr.length,
    r = arr.length + count * 2;
  arr.length = r;
  while (--l >= 0) {
    if (arr[l] === ' ') {
      arr[--r] = '0';
      arr[--r] = '2';
      arr[--r] = '%';
    } else {
      arr[--r] = arr[l];
    }
  }
  return arr.join('');
}
replaceSpace('We are happy.');
// @lc code=end
