/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function largestValues(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    let length = queue.length;
    let curLevelMax = queue[0].val;
    while (length--) {
      const node = queue.shift();
      if (node.val > curLevelMax) curLevelMax = node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(curLevelMax);
  }
  return res;
}
// @lc code=end
