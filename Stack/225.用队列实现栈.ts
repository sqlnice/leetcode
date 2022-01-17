/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
  private queue1: number[] = [];
  private queue2: number[] = [];

  push(x: number): void {
    this.queue1.push(x);
  }

  pop(): number {
    if (!this.queue1.length) {
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    return this.queue1.shift();
  }

  top(): number {
    const x = this.pop();
    this.queue1.push(x);
    return x;
  }

  empty(): boolean {
    return this.queue1.length === 0 && this.queue2.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
