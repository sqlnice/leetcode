/*
 * @lc app=leetcode.cn id=1002 lang=typescript
 *
 * [1002] 查找常用字符
 * 根据这道题的描述，可以看到有字符串、出现频率、重复等关键词，我们就可以使用哈希表的方式来解决该问题。
 * 问题可以拆解为： 输出 每个字符串中都有且出现次数最少的那个字母，如果多次那就输出多次这个字母。
 * 于是：          循环 words[0]，将里面字母出现的次数用数组哈希表存储起来
 *                循环 words[1] - words[ n - 1]，每次循环都存在一个数组哈希表中，此轮循环结束前，
 *                和 words[0] 的值比较，取最小的即可，说明在不同的字符串中，该值出现的次数，即打印的次数。
 */

// @lc code=start
function commonChars(words: string[]): string[] {
  const res = []
  const size = 26
  const firstHash = new Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  // 循环第一个
  const firstWord = words[0]
  for (let i = 0; i < firstWord.length; i ++){
    firstHash[firstWord[i].charCodeAt(0) - a] ++
  }
  // 循环 1 - N 
  for (let i = 1; i< words.length; i++) {
    const otherHash = new Array(size).fill(0)
    const word = words[i]
    for (let j = 0; j < word.length; j++){
      otherHash[word[j].charCodeAt(0) - a] ++
    }
    
    for (let i = 0; i < size; i++) {
      firstHash[i] = Math.min(firstHash[i],otherHash[i])
    }
  }

  // 把结果数组里面的值大于 0 的转成字符串输出
  // [0, 1, 0, 1, 2, 2, 0, 0, 0, 0, 0, ...] -> [b, d, e, e, f, f]
  for (let i = 0; i < size; i++) {
    while (firstHash[i] > 0) {
      res.push(String.fromCharCode(i + a))
      firstHash[i] -- 
    }
  }
  return res
};
// @lc code=end

