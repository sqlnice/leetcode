/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * 方法一 直接合并后排序
 */
// var merge = function(nums1, m, nums2, n) {
// nums1.splice(m,nums1.length - m,...nums2)
// nums1.sort((a,b)=>{
//  return a-b
// })
// };

/**
 * 方法二 双指针
 * 时间复杂度O(m + n)
 * 空间复杂度O(m +n)
 */
//  var merge = function (nums1, m, nums2, n) {
//   let l = 0, r = 0
//   const result = new Array(m + n).fill(0)
//   let cur
//   // 双指针开始
//   while (l < m || r < n) {
//     if (l === m) {
//       // nums1 结束
//       cur = nums2[r++]
//     } else if (r === n) {
//       // nums2 结束
//       cur = nums1[l++]
//     } else if (nums1[l] < nums2[r]) {
//       cur = nums1[l++]
//     } else {
//       cur = nums2[r++]
//     }
//     result[l + r - 1] = cur
//   }
//   for (let i = 0; i < result.length; i++) {
//     nums1[i] = result[i]
//   }
// };
// @lc code=start
/**
 * 方法三 倒序双指针
 * 方法二中为了防止覆盖需要新的空间，其实nums1后面是空的，我们只要每次把最大的数值放在最后面就行
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 时间复杂度O(m + n)
 * 空间复杂度O(1)
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m-1, p2 = n-1
  while (p1>=0 || p2>=0) {
    if(p1 === -1) {
      // nums1 结束
      nums1[p1 + p2 + 1] = nums2[p2--]
    } else if (p2 === -1) {
      // nums2 结束
      nums1[p1 + p2 + 1] = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      nums1[p1 + p2 +1] = nums1[p1--]
    } else {
      nums1[p1 + p2 +1] = nums2[p2--]
    }
  }
};
// @lc code=end

