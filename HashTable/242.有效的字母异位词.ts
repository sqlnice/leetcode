/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 * 时间复杂度 O(n) n 为 s 的长度
 * 空间复杂度 O(26)
 * 
 * 因为字符的长度为26，所以只需要定义一个长度为26的数组。
 * 每次循环 s 的时候在让其在数组中索引的值自增一。
 * 每次循环 t 的时候，让 t 在数组索引的地方自减一，
 * 如果当前位置自减后为 0 ，说明 t 是没有这个数字的，直接返回 false
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false
  const table = new Array(26).fill(0)
  for (let i = 0; i < s.length; i ++){
    table[s.charCodeAt(i) - 'a'.charCodeAt(0)] ++ 
  }
  for (let i = 0; i < t.length; i ++){
    table[t.charCodeAt(i) - 'a'.charCodeAt(0)] --
    if(table[t.charCodeAt(i) - 'a'.charCodeAt(0)]  < 0){
      return false
    }
  }
  return true
};
// @lc code=end

