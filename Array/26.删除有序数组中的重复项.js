/**
 * 双指针 
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
    const length = nums.length
    if (length === 0 || length === 1) return length
    // 双指针下标
    let l = 0, r = 1
    // 由于是排好序的数组，双指针比较大小
    while (r < length) {
        // 非重复
        if (nums[r] !== nums[l]) {
            nums[++l] = nums[r]
        }
        r++
    }
    return l + 1
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));