/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// 递归
// function preorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   const preorder = (root: TreeNode) => {
//     if (!root) return;
//     res.push(root.val);
//     preorder(root.left);
//     preorder(root.right);
//   };
//   preorder(root);
//   return res;
// }

// 迭代（栈
// 进栈 右 -> 左
// 出站 中 -> 左 -> 右
function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;
  const stack = [root];
  let cur = null;
  while (stack.length) {
    cur = stack.pop();
    result.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }

  return result;
}

// @lc code=end
