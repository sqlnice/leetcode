/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  nums.sort();
  const result: number[][] = [];
  const path: number[] = [];
  const usedArr: boolean[] = new Array(nums.length).fill(false);
  const backTracking = (path: number[]) => {
    if (path.length === nums.length) return result.push(path.slice());
    for (let i = 0; i < nums.length; i++) {
      // 可以跳过的
      if (i > 0 && nums[i] === nums[i - 1] && usedArr[i - 1] === false)
        continue;
      if (usedArr[i] === false) {
        path.push(nums[i]);
        usedArr[i] = true;
        backTracking(path);
        usedArr[i] = false;
        path.pop();
      }
    }
  };
  backTracking(path);
  return result;
}
// @lc code=end
