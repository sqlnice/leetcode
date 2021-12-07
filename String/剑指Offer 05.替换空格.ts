/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * 剑指Offer 05.替换空格
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1： 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

// @lc code=start
function replaceSpace(s: string,): string {
  const strArr = Array.from(s)
  let length = strArr.length
  let spaceCount = 0
  // 字符串中有几个空格
  for (let i = 0; i < length; i++) {
      if (strArr[i] === ' ') spaceCount++
  }
  let left = length - 1
  let right = length + spaceCount * 2 - 1
  // 双指针从后向前走
  while (left >= 0) {
      if (strArr[left] === ' ') {
          strArr[right--] = '0'
          strArr[right--] = '2'
          strArr[right--] = '%'
          left--
      } else {
          strArr[right--] = strArr[left--]
      }
  }

  return strArr.join("")
};
// @lc code=end

replaceSpace("We are happy.")