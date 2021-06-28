/**
 * @description 利用哈希表
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
  let len = nums.length;
  const MAP = new Map();
  MAP.set(nums[0], 0);
  for (let i = 1; i < len; i++) {
      let other = target - nums[i];
      if (MAP.get(other) !== undefined) return [MAP.get(other), i];
      MAP.set(nums[i], i)
  }
};
