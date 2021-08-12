/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * 双重循环 暴力
 * @param target 
 * @param nums 
 * @returns 
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 */
// function minSubArrayLen(target: number, nums: number[]): number {
//   let minLength = 0
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j]
//       if (sum >= target) {
//         // 满足条件
//         if(!minLength) {
//           minLength =  j - i + 1
//         }else{
//           minLength =Math.min(minLength, j - i + 1)
//         }
//         break
//       }
//     }
//   }

//   return minLength
// };
/**
 * 滑动窗口法
 * @param target 
 * @param nums 
 * @returns 
 * 时间复杂度 O(n) 虽然是两次循环，但每个数字在每个循环里面只用到了一次
 * 空间复杂度 O(1)
 */
function minSubArrayLen(target: number, nums: number[]): number {
  let len = nums.length
  let l=0 //窗口左边界
  let r=0 // 窗口右边界
  let sum=0 // 当前窗口的和
  let subLength = len + 1 // 子序列长度，肯定比总长度要小，如果最后还是len + 1，说明没有符合的条件

  // 窗口右边界
  while (r < len) {
    // 求出子序列的和，然后移动窗口的右边界
    sum += nums[r++]
    while (sum >= target) {
      // 求出子序列的长度
      subLength = subLength < r - l ? subLength : r - l
      // 右边界确定的情况下，且sum >= target 缩小左边界（精髓之处）
      sum -= nums[l++]
    }
  }
  // 如果subLength没被赋值，返回 0
  return subLength > len ? 0 : subLength
};
// @lc code=end

