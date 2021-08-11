/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * 双指针 比较前后平方值，最大的先放在数组最后没，以符合升序的返回结果
 * @param {number[]} nums
 * @return {number[]}
 * 时间复杂度O(n)
 */
var sortedSquares = function (nums) {
  const result = [];
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.unshift(nums[left] * nums[left]);
      left++;
    } else {
      result.unshift(nums[right] * nums[right]);
      right--;
    }
  }
  return result;
};
// @lc code=end
