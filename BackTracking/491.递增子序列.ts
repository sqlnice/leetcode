/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 */

// @lc code=start
function findSubsequences(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  const backTracking = (startIndex: number, path: number[]) => {
    // 满足条件才存起来
    if (path.length > 1) {
      result.push(path.slice());
    }
    const used: Set<number> = new Set();

    for (let i = startIndex; i < nums.length; i++) {
      if (used.has(nums[i]) || nums[i] < path[path.length - 1]) continue;
      // 比前一个值小才存进去
      path.push(nums[i]);
      used.add(nums[i]);
      backTracking(i + 1, path);
      path.pop();
    }
  };
  backTracking(0, path);
  return result;
}
// @lc code=end
