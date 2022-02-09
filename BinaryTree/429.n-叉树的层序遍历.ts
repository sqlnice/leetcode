/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */
class Node1 {
  val: number;
  children: Node1[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}
function levelOrder(root: Node1 | null): number[][] {
  const res: number[][] = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    //记录每一层节点个数还是和二叉树一致
    let length = queue.length;
    const curLevel = [];
    while (length--) {
      const node = queue.shift();
      curLevel.push(node.val);
      // 结构变了，需要用children
      for (const item of node.children) {
        item && queue.push(item);
      }
    }
    res.push(curLevel);
  }
  return res;
}
// @lc code=end
