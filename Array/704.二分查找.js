/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * 二分法，左闭右闭写法 [left,right]
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   let left = 0,
//     right = nums.length - 1;
//   while (left <= right) {
//     const middle = parseInt((left + right) / 2);
//     if (nums[middle] === target) return middle;
//     if (nums[middle] > target) {
//       right = middle - 1;
//     } else if (nums[middle] < target) {
//       left = middle + 1;
//     }
//   }
//   return -1;
// };
/**
 * 二分法，左闭右开写法 [left,right)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const middle = parseInt((left + right) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      right = middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    }
  }
  return -1;
};
// @lc code=end
