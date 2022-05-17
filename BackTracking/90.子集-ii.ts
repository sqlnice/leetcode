/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  // 先排序
  nums.sort();
  const result: number[][] = [];
  const path: number[] = [];

  const backTracking = (startIndex: number, path: number[]) => {
    result.push(path.slice());
    for (let i = startIndex; i < nums.length; i++) {
      // 同一层级不可重复
      if (i > startIndex && nums[i - 1] === nums[i]) continue;
      path.push(nums[i]);
      backTracking(i + 1, path);
      path.pop();
    }
  };

  backTracking(0, path);
  return result;
}
// @lc code=end
