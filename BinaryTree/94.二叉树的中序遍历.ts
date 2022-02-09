/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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
// function inorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   const inorder = (root: TreeNode) => {
//     if (!root) {
//       return;
//     }
//     inorder(root.left);
//     res.push(root.val);
//     inorder(root.right);
//   };
//   inorder(root);
//   return res;
// }

// function inorderTraversal(root: TreeNode | null): number[] {
//   const result: number[] = [];
//   if (!root) return result;
//   const stack = [];

//   // 把左边全部入栈
//   while (root) {
//     stack.push(root);
//     root = root.left;
//   }

//   while (stack.length) {
//     // 取出栈顶的元素
//     let node = stack.pop();
//     result.push(node.val);
//     // 取右子树
//     node = node.right;
//     while (node) {
//       stack.push(node);
//       // 不断压入右子树的左节点
//       node = node.left;
//     }
//   }
//   return result;
// }

// 迭代（栈
// 进栈 左 -> 右
// 出站 左 -> 中 -> 右
function inorderTraversal(root: TreeNode | null): number[] {
  const res = [];
  const stack = [];
  let cur = root;
  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      // 左
      cur = cur.left;
    } else {
      // --> 弹出 中
      cur = stack.pop();
      res.push(cur.val);
      // 右
      cur = cur.right;
    }
  }
  return res;
}

// @lc code=end
