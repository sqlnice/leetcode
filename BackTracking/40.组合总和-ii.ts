/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort();
  const result: number[][] = [];
  const path: number[] = [];
  let curSum = 0,
    startIndex = 0;
  const backTracking = (startIndex: number) => {
    // 终止条件
    if (curSum === target) {
      result.push(path.slice());
    }
    // 单层逻辑
    for (let i = startIndex; i < candidates.length; i++) {
      // 下一个要计算的值已经大于总和则跳过
      if (candidates[i] > target - curSum) continue;
      // 看之前是否使用过
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      curSum += candidates[i];
      backTracking(i + 1);
      path.pop();
      curSum -= candidates[i];
    }
  };
  backTracking(startIndex);
  return result;
}
// @lc code=end
