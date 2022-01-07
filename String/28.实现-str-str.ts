/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 * 前缀表统一减一
 */

// @lc code=start
const haystack = 'aabaabaafa';
const needle = 'aabaaf';
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;

  const getNext = (needle: string) => {
    let next = [];
    let j = -1;
    next.push(j);
    for (let i = 1; i < needle.length; ++i) {
      // i从 1 开始
      while (j >= 0 && needle[i] !== needle[j + 1]) {
        // 前后缀不相同
        // 向前回退
        j = next[j];
      }
      if (needle[i] === needle[j + 1]) {
        // 前后缀相同
        j++;
      }
      next.push(j);
    }
    return next;
  };
  // [-1, 0, -1, 0, 1, -1]
  let next = getNext(needle);
  let j = -1; // 因为next数组里记录的起始位置为 -1
  for (let i = 0; i < haystack.length; ++i) {
    // i 从 0 开始
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      // 不匹配
      // j寻找之前的位置
      j = next[j];
    }
    if (haystack[i] === needle[j + 1]) {
      // 匹配 j 和 i 同时向后移动，i的增加在for循环里
      j++;
    }
    if (j === needle.length - 1) {
      // 文本串中出现了模式串
      return i - needle.length + 1;
    }
  }

  return -1;
}
// @lc code=end

strStr(haystack, needle);
