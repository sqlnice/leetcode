/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
type OperatorChars = '+' | '-' | '*' | '/';
function calculate(num1: string, num2: string, operator: OperatorChars): string {
  const a = parseInt(num1);
  const b = parseInt(num2);
  const map = {
    '+': (): number => a + b,
    '-': (): number => b - a,
    '*': (): number => a * b,
    '/': (): number => b / a,
  };

  return String(map[operator]());
}
function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const char = tokens[i];
    // 给定逆波兰表达式总是有效的，不需要做边界处理
    if (['+', '-', '*', '/'].includes(char)) {
      // 遇到符号了
      stack.push(calculate(stack.pop(), stack.pop(), char as OperatorChars));
    } else {
      stack.push(char);
    }
  }
  return parseInt(stack[0]);
}
// evalRPN(['2', '1', '+', '3', '*']);
// @lc code=end
