/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  // 暴力解法，双重循环模拟
  // 时间复杂度：O(n²)
  // 空间复杂度：O(1)
  // for (let i = 0; i < cost.length; i++) {
  //   let rest = gas[i] - cost[i]; // 剩余油量
  //   let index = (i + 1) % cost.length; // 起点
  //   while (rest > 0 && index !== i) {
  //     // 单层
  //     rest += gas[index] - cost[index];
  //     index = (index + 1) % cost.length; // 起点
  //   }
  //   // 剩油 并且一圈
  //   if (rest >= 0 && index === i) return i;
  // }
  // return -1;
  // 贪心一
  // 时间复杂度：O(n)
  // 空间复杂度：O(1)
  // let curSum = 0; // 总和如果小于0，那么跑不完一圈
  // let min = Infinity; // 从0开始跑，如果最小油没有出现过负数，则可以跑完
  // for (let i = 0; i < cost.length; i++) {
  //   const rest = gas[i] - cost[i];
  //   curSum += rest;
  //   if (curSum < min) min = curSum;
  // }
  // if (curSum < 0) return -1;
  // if (min >= 0) return 0;
  // // 如果累加的最小值是负数，汽车就要从非0节点出发，从后向前，看哪个节点能这个负数填平，能把这个负数填平的节点就是出发节点。
  // for (let i = cost.length - 1; i >= 0; i--) {
  //   const rest = gas[i] - cost[i];
  //   min += rest;
  //   if (min >= 0) return i;
  // }
  // return -1;

  // 贪心二
  // 时间复杂度：O(n)
  // 空间复杂度：O(1)

  let curSum = 0;
  let totalSum = 0; // 跑一整圈需要的油量
  let start = 0;
  for (let i = 0; i < cost.length; i++) {
    const rest = gas[i] - cost[i]; // 消耗油量
    totalSum += rest;
    curSum += rest;
    if (curSum < 0) {
      curSum = 0;
      start = i + 1;
    }
  }
  if (totalSum < 0) return -1;
  return start;
}

// @lc code=end
