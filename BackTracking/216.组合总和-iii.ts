/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  let curSum = 0;
  // 回溯
  const backTracking = (n: number, k: number, startIndex: number) => {
    if (curSum > n) return;
    // 结束条件
    if (path.length === k) {
      if (curSum === n) result.push([...path]);
      return;
    }
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i);
      curSum += i;
      backTracking(n, k, i + 1);
      path.pop();
      curSum -= i;
    }
  };
  backTracking(n, k, 1);
  return result;
}
// @lc code=end
