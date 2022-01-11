/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    if (nums[l] === val) {
      nums[l] = nums[r--];
    } else {
      l++;
    }
  }
  return l;
}
// @lc code=end
