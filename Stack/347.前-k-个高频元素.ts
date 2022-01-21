/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  // 1.出现频率
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  // 创建小顶堆
  const priorityQueue: any = new PriorityQueue((a: number[], b: number[]) => a[1] - b[1]);

  // entry 是一个长度为2的数组，0位置存储key，1位置存储value
  for (const entry of map.entries()) {
    debugger;
    priorityQueue.push(entry);
    if (priorityQueue.size() > k) {
      priorityQueue.pop();
    }
  }

  const ret = [];

  for (let i = priorityQueue.size() - 1; i >= 0; i--) {
    ret[i] = priorityQueue.pop()[0];
  }

  return ret;
}

class PriorityQueue {
  private compareFn: any = null;
  private queue: number[][] = [];
  constructor(compareFn: (a: number[], b: number[]) => number) {
    this.compareFn = compareFn;
  }

  push(item: number[]) {
    this.queue.push(item);
    let index = this.queue.length - 1;
    let parent = Math.floor((index - 1) / 2);
    // 上浮
    while (parent >= 0 && this.compare(parent, index) > 0) {
      // 交换
      [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // 获取堆顶元素并移除
  pop() {
    const ret = this.queue[0];

    // 把最后一个节点移到堆顶
    this.queue[0] = this.queue.pop();

    let index = 0;
    // 左子节点下标，left + 1 就是右子节点下标
    let left = 1;
    let selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

    // 下沉
    while (selectedChild !== undefined && this.compare(index, selectedChild) > 0) {
      // 交换
      [this.queue[index], this.queue[selectedChild]] = [this.queue[selectedChild], this.queue[index]];
      index = selectedChild;
      left = 2 * index + 1;
      selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    }

    return ret;
  }
  size() {
    return this.queue.length;
  }
  // 使用传入的 compareFn 比较两个位置的元素
  compare(index1: any, index2: any) {
    if (this.queue[index1] === undefined) {
      return 1;
    }
    if (this.queue[index2] === undefined) {
      return -1;
    }

    return this.compareFn(this.queue[index1], this.queue[index2]);
  }
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// @lc code=end
