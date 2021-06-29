/**
 * @description 双指针查找
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
  let max = 0
  let j = height.length - 1
  for (let i = 0; i < j;) {
      const minHeight = height[i] < height[j] ? height[i++] : height[j--];
      const area = (j - i+1 ) * minHeight
      max = Math.max(max, area)
  }
  return max
};
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49