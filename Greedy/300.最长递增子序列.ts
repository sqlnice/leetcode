/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  // 动态规划
  // const dp = new Array(nums.length).fill(1);
  // let max = 1;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[j] + 1, dp[i]);
  //     }
  //   }
  //   max = Math.max(max, dp[i]);
  // }

  // return max;

  // 贪心
  // 保持局部递增，则全局递增
  // const arr = [nums[0]];
  // for (let i = 1; i < nums.length; i++) {
  //   // 比已保存的最后一个 小
  //   if (nums[i] <= arr[arr.length - 1]) {
  //     for (let j = 0; j < arr.length; j++) {
  //       if (arr[j] >= nums[i]) {
  //         arr[j] = nums[i];
  //         break;
  //       }
  //     }
  //   } else {
  //     arr.push(nums[i]);
  //   }
  // }
  // return arr.length;

  // 贪心 + 二分
  const arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    // 比已保存的最后一个 小
    if (nums[i] <= arr[arr.length - 1]) {
      let l = 0;
      let r = arr.length - 1;
      while (l <= r) {
        const mid = Math.round((r + l) / 2);
        if (arr[mid] < nums[i]) {
          // 要找的数字在右半区
          l = mid + 1;
        } else if (arr[mid] > nums[i]) {
          // 要找的数字在左半区
          r = mid - 1;
        } else {
          // 找到这个数字了
          l = mid;
          break;
        }
      }
      arr[l] = nums[i];
    } else {
      arr.push(nums[i]);
    }
  }
  return arr.length;
}
// @lc code=end
