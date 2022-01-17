/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
  // 模拟两个栈
  private stackIn: number[] = [];
  private stackOut: number[] = [];

  push(x: number): void {
    this.stackIn.push(x);
  }

  pop(): number {
    if (this.stackOut.length) {
      return this.stackOut.pop();
    }
    while (this.stackIn.length) {
      this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
  }

  peek(): number {
    const x = this.pop();
    this.stackOut.push(x);
    return x;
  }

  empty(): boolean {
    return this.stackOut.length === 0 && this.stackIn.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
