/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  // 1. 确定递归函数参数及返回值
  const getDepth = (node: TreeNode | null): number => {
    // 2. 确定递归函数终止条件
    if (!node) return 0
    // 3. 确定单层逻辑
    const leftDepth = getDepth(node.left)
    // 左子树不平衡
    if (leftDepth === -1) return -1
    const rightDepth = getDepth(node.right)
    // 右子树不平衡
    if (rightDepth === -1) return -1
    if (Math.abs(leftDepth - rightDepth) > 1) return -1
    return Math.max(leftDepth, rightDepth) + 1
  }
  return getDepth(root) !== -1
}
// @lc code=end
