/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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
// 递归
// function postorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];

//   const postorder = (root: TreeNode) => {
//     if (!root) return;
//     postorder(root.left);
//     postorder(root.right);
//     res.push(root.val);
//   };
//   postorder(root);
//   return res;
// }

// 迭代
function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root) return res;
  const stack = [root];
  let cur = null;
  while (stack.length) {
    cur = stack.pop();
    res.push(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  }
  return res.reverse();
}
// @lc code=end
