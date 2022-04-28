/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
letterCombinations("23");
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
function letterCombinations(digits: string): string[] {
  const strMap: string[][] = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  const result: string[] = [];
  if (!digits) return result;
  // curIndex 第几个字母
  // route 已收集的当前层级
  const backTracking = (digits: string, curIndex: number, route: string[]) => {
    // 确定终止条件
    if (route.length === digits.length) {
      result.push(route.join(""));
      return;
    }
    const tempArr: string[] = strMap[digits[curIndex] as unknown as number];
    for (let i = 0; i < tempArr.length; i++) {
      // 进入当层循环
      route.push(tempArr[i]);
      backTracking(digits, curIndex + 1, route);
      route.pop();
    }
  };
  backTracking(digits, 0, []);
  return result;
}
// @lc code=end
