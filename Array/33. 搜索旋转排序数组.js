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

// TODO 复杂度O(log n)