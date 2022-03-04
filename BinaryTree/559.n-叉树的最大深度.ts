/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */
class Node4 {
  val: number;
  children: Node4[];
  constructor(val?: number, children?: Node4[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

// 递归遍历（返回的时候是从下到上）
// function maxDepth(root: Node4 | null): number {
//   if (!root) return 0;
//   let depth = 0;
//   for (const child of root.children) {
//     depth = Math.max(depth, maxDepth(child));
//   }
//   return depth + 1;
// }

// 层序遍历
function maxDepth(root: Node4 | null): number {
  if (!root) return 0;
  const queue = [root];
  let count = 0;
  while (queue.length) {
    let length = queue.length;
    count++;
    while (length--) {
      const node = queue.shift();
      for (const child of node.children) {
        child && queue.push(child);
      }
    }
  }
  return count;
}
// @lc code=end
