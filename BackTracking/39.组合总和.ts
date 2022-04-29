/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  let curSum = 0;
  const backTracking = (candidates: number[], startIndex: number) => {
    // 终止条件
    if (curSum > target) return;
    if (curSum === target) {
      result.push(path.slice());
      return;
    }
    // 单层逻辑
    for (let i = startIndex; i < candidates.length; i++) {
      if (candidates[i] > target - curSum) continue;
      path.push(candidates[i]);
      curSum += candidates[i];
      backTracking(candidates, i);
      curSum -= candidates[i];
      path.pop();
    }
  };
  backTracking(candidates, 0);
  return result;
}
// @lc code=end
