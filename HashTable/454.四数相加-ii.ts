/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 * 定义一个map
 * 循环大A和大B，将值存起来，key为和，value为出现的次数
 * 循环大C和大D，如果map中有 key与和相加为0的，即为符合条件
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map()
  let res = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j <= nums2.length; j++) {
      const sum = nums1[i] + nums2[j]
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }
  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const sum = n3 + n4
      res += (map.get(0 - sum) || 0)
    }
  }
  return res
};
// @lc code=end

