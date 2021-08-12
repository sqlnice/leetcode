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
function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= target) {
        // 满足条件
        if(!minLength) {
          minLength =  j - i + 1
        }else{
          minLength =Math.min(minLength, j - i + 1)
        }
        break
      }
    }
  }

  return minLength
};
// @lc code=end

