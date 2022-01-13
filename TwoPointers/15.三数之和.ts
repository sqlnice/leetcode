/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const length = nums.length;
  if (!Array.isArray(nums) || length === 0) return result;
  // [-3, -3, -2, -1, 0, 0, 1, 2, 3, 4]
  nums.sort((a, b) => a - b);

  // 最外层for
  for (let i = 0; i < length; i++) {
    // 第一个数大于0，剩下的就没必要比较了
    if (nums[i] > 0) break;
    // 重复项
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = length - 1;
    // 开始双指针比较
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[++left]);
        while (left < right && nums[right] === nums[--right]);
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }

  return result;
}
// @lc code=end
