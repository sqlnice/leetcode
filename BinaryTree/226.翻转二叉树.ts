/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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
// 递归版本 前序遍历
// function invertTree(root: TreeNode | null): TreeNode | null {
//   // 终止条件
//   if (!root) return root;
//   const invertNode = (left: TreeNode | null, right: TreeNode | null) => {
//     [root.left, root.right] = [right, left];
//   };
//   invertNode(root.left, root.right);
//   invertTree(root.left);
//   invertTree(root.right);
//   return root;
// }

// 迭代版本(统一模板)) 前序遍历
// function invertTree(root: TreeNode | null): TreeNode | null {
//   if (!root) return root;
//   // 定义交换函数
//   const invertNode = (root: TreeNode | null, left: TreeNode | null, right: TreeNode | null) => {
//     [root.left, root.right] = [right, left];
//   };
//   let stack = [root];
//   while (stack.length) {
//     let node = stack.pop();
//     // 根节点
//     if (node) {
//       // 前序遍历顺序为 中左右，入栈顺序为右左中
//       node.right && stack.push(node.right);
//       node.left && stack.push(node.left);
//       stack.push(node);
//       stack.push(null);
//     } else {
//       node = stack.pop();
//       // 节点处理
//       invertNode(node, node.left, node.right);
//     }
//   }
//   return root;
// }

// 层序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  const invertNode = (root: TreeNode | null, left: TreeNode | null, right: TreeNode | null) => {
    [root.left, root.right] = [right, left];
  };
  const queue = [root];
  while (queue.length) {
    let length = queue.length;
    while (length--) {
      const node = queue.shift();
      invertNode(node, node.left, node.right);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
}
// @lc code=end
