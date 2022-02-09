/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  const queue = [];
  const res: number[][] = [];
  if (!root) return res;
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    const curLevel = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      curLevel.push(node.val);
      // 把下一层级的左右节点存入queue队列
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    // 从数组前头插入值，避免最后反转数组，减少运算时间
    res.unshift(curLevel);
  }
  return res;
}
// @lc code=end
