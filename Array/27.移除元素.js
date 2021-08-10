/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * 双指针
 * @description 最坏情况没有val，slowIndex和fastIndex要各走一遍
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   let slowIndex = 0;
//   for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
//     if (nums[fastIndex] !== val) {
//       nums[slowIndex++] = nums[fastIndex];
//     }
//   }
//   return slowIndex;
// };
/**
 * 双指针(优化版)
 * @description 收尾双指针，只要走一遍n
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[--right];
    } else {
      left++;
    }
  }
  return left;
};
// @lc code=end
