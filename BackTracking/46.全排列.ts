/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  // 回溯
  const backTracking = (path: number[]) => {
    if (path.length === nums.length) return result.push(path.slice());
    for (let i = 0; i < nums.length; i++) {
      const item = nums[i];
      // 当层逻辑
      if (path.includes(item)) continue;
      path.push(item);
      backTracking(path);
      path.pop();
    }
  };

  backTracking(path);
  return result;
}
// @lc code=end
