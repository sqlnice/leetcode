/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

// 迭代法
// function minDepth(root: TreeNode | null): number {
//   let res = 0;
//   if (!root) return res;
//   const queue = [root];
//   while (queue.length) {
//     let length = queue.length;
//     res++;
//     while (length--) {
//       const node = queue.shift();
//       node.left && queue.push(node.left);
//       node.right && queue.push(node.right);
//       // 都为空的情况下就是最小
//       if (!node.left && !node.right) {
//         return res;
//       }
//     }
//   }
//   return res;
// }

// 递归法
function minDepth(root: TreeNode | null): number {
  // 1.确定函数的参数和返回值
  const getMinDepth = (node: TreeNode | null): number => {
    // 2.确定终止条件
    if (!root) return 0;
    // 3.确定单层递归的逻辑
    if (!node.left && !node.right) return 1;
    if (node.left && !node.right) {
      return 1 + getMinDepth(node.left);
    }
    if (!node.left && node.right) {
      return 1 + getMinDepth(node.right);
    }
    return Math.min(getMinDepth(node.left), getMinDepth(node.right)) + 1;
  };
  return getMinDepth(root);
}
// @lc code=end
