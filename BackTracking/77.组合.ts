/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// 回溯
// @lc code=start
function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  const backTracking = (n: number, k: number, startIndex: number) => {
    // 终止条件
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    // 剪枝操作，可以画图理解
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backTracking(n, k, i + 1);
      // 回溯，撤销上次的操作
      path.pop();
    }
  };
  // 从 1 开始计算
  backTracking(n, k, 1);
  return result;
}
// @lc code=end
