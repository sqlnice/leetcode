/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  const len = nums.length;
  const result: number[] = [];
  const queue: number[] = [];
  for (let i = 0; i < len; i++) {
    // 当前的值比滑动窗口内的值大
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
    // 不在窗口内
    while (queue[0] <= i - k) {
      queue.shift();
    }
    // 可以把前k个循环放在外面，更快
    i >= k - 1 && result.push(nums[queue[0]]);
  }
  return result;
}
// maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
// @lc code=end
