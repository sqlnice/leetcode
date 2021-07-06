/**
 * @description 排序、双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
  const result = []
  const length = nums.length
  if (!Array.isArray(nums) || length === 0) return result
  nums.sort((a, b) => { return a - b }) // 排序后格式 [0,1,2,3,4,5,6]
  for (let i = 0; i < length; i++) {
      // 最外层循环判断
      if (nums[i] > 0) break // 如果大于0，终止循环
      if (i > 0 && nums[i] === nums[i - 1]) continue // 重复值
      let l = i + 1
      let r = length - 1
      while (l < r) {
          const sum = nums[i] + nums[l] + nums[r]
          if (sum === 0) {
              result.push([nums[i], nums[l], nums[r]])
              // 跳过重复值
              while (l < r && nums[l] === nums[++l]);
              while (l < r && nums[r] === nums[--r]);
          } else if (sum > 0) r--
          else if (sum < 0) l++
      }
  }
  return result
};
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))