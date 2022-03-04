/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

// 层级遍历
// function maxDepth(root: TreeNode | null): number {
//   if (!root) return 0;
//   let res = 0;
//   const queue = [root];
//   while (queue.length) {
//     let length = queue.length;
//     res++;
//     while (length--) {
//       const node = queue.shift();
//       node.left && queue.push(node.left);
//       node.right && queue.push(node.right);
//     }
//   }
//   return res;
// }

// 递归遍历
function maxDepth(root: TreeNode | null): number {
  // 递归三部曲
  // 1.确定递归函数的参数和返回值
  const getDepth = (node: TreeNode | null) => {
    // 2.确定边界条件
    if (!node) return 0;

    // 3.确定单层逻辑
    const leftDepth = getDepth(node.left);
    const rightDepth = getDepth(node.right);

    const depth: number = Math.max(leftDepth, rightDepth) + 1;
    return depth;
  };

  return getDepth(root);
}
// @lc code=end
