/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
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
// 递归版本
// function countNodes(root: TreeNode | null): number {
//   const getNodeSum = (node: TreeNode | null): number => {
//     if (!node) return 0;
//     const leftNum = getNodeSum(node.left);
//     const rightNum = getNodeSum(node.right);
//     return leftNum + rightNum + 1;
//   };
//   return getNodeSum(root);
// }
// 迭代(层序遍历)版本
// function countNodes(root: TreeNode | null): number {
//   if (!root) return 0;
//   const queue: Array<TreeNode | null> = [root];
//   let nodeNum = 0;

//   while (queue.length) {
//     let length = queue.length;
//     while (length--) {
//       const node = queue.shift();
//       nodeNum++;
//       node.left && queue.push(node.left);
//       node.right && queue.push(node.right);
//     }
//   }

//   return nodeNum;
// }
// 利用完全二叉树性质
function countNodes(root: TreeNode | null): number {
  if (!root) return 0;
  let left = root.left,
    right = root.right,
    leftHeight = 1,
    rightHeight = 1;
  while (left) {
    left = left.left;
    leftHeight++;
  }
  while (right) {
    right = right.right;
    rightHeight++;
  }
  if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1;
  return countNodes(root.left) + countNodes(root.right) + 1;
}
// @lc code=end
