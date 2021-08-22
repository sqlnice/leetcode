/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 * 未固定数组的长度，所以不用数组哈希表。另外如果两个数跨度太大，数组里面的空间就会造成浪费
 * 利用set
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  const nums1Set = new Set(nums1), resSet = new Set()
  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      resSet.add(nums2[i])
    }
  }

  return Array.from(resSet) as number[]
};
// @lc code=end

