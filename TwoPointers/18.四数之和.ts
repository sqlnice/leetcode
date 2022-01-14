/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  // 前置判断
  const restult: number[][] = [];
  const length = nums.length;
  if (length < 4) return restult;
  // 先排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length - 3; i++) {
    // 去除重复项
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < length - 2; j++) {
      // 去除重复项
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          restult.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[++left]) {}
          while (left < right && nums[right] === nums[--right]) {}
        } else if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        }
      }
    }
  }
  return restult;
}
// @lc code=end
