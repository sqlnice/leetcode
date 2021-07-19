/**
 * 复杂度O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i
  }
  return -1
};

/**
 * 复杂度O(log n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
  const length = nums.length
  if (length === 0) return -1
  if (length === 1) return nums[0] === target ? 0 : -1
  let left = 0, right = length - 1
  while (left < right) {
      // 找中点
      const mid = parseInt((right + left) / 2)
      if (nums[mid] === target) return mid
      // 左边是升序
      if (nums[left] < nums[mid]) {
          // 确定target在左边里面
          if (nums[left] <= target && target <= nums[mid]) {
              // 搜索范围缩小为左半边
              right = mid - 1
          } else {
              // 否在target在右半边
              left = mid + 1
          }
      } else {
          // 右边是升序
          // target 在右半边
          if (nums[mid + 1] <= target && target <= nums[right]) {
              // 所搜范围缩小为右半边
              left = mid + 1
          } else {
              right = mid - 1
          }
      }
  }
  return nums[left] === target ? left : -1
};