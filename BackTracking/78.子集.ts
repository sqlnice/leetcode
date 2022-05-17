/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const backTracking = (startIndex: number, path: number[]) => {
    result.push(path.slice());
    // 横向遍历
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      // 纵向遍历
      backTracking(i + 1, path);
      path.pop();
    }
  };
  backTracking(0, []);
  return result;
}
// @lc code=end
