/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];
  const backTracking = (startIndex: number, path: string[]): void => {
    // 终止条件 取到了四个
    if (path.length === 4 && startIndex >= s.length) {
      result.push(path.join("."));
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      const curStr = s.slice(startIndex, i + 1);
      // 满足规则
      if (verify(curStr)) {
        path.push(curStr);
        backTracking(i + 1, path);
        path.pop();
      }
    }
  };
  // 检验给定范围内的数字是否合法
  const verify = (str: string): boolean => {
    // 必须在 0-255 整数
    if (Number(str) < 0 || Number(str) > 255) return false;
    // 不可以 0 开头
    if (str.length > 1 && str[0] === "0") return false;
    return true;
  };
  backTracking(0, []);
  return result;
}
// @lc code=end
