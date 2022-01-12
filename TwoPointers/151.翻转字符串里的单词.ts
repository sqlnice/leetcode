/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  // API做法
  // return s.trim().split(/\s+/).reverse().join(' ');

  // 队列
  let l = 0;
  let r = s.length - 1;
  const queue = [];
  let word = '';
  // 去除首尾空格
  while (s.charAt(l) === ' ') l++;
  while (s.charAt(r) === ' ') r--;

  while (l <= r) {
    const chart = s.charAt(l++);
    if (chart !== ' ') {
      word = word + chart;
    } else if (word) {
      queue.unshift(word);
      word = '';
    }
  }
  // 最后一个单词
  queue.unshift(word);
  return queue.join(' ');
}
// reverseWords('the sky is blue');
// @lc code=end
