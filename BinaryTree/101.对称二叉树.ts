/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

// 递归法
// function isSymmetric(root: TreeNode | null): boolean {
//   const compare = (left: TreeNode | null, right: TreeNode | null): boolean => {
//     // 两侧都没值
//     if (left === null && right === null) return true;
//     // 左侧有值 右侧无值
//     if (left && right === null) return false;
//     // 左侧无值 右侧有值
//     if (left === null && right) return false;
//     // 都有值的情况下不相等
//     if (left.val !== right.val) return false;
//     // 节点的外侧
//     const outSide = compare(left.left, right.right);
//     // 节点的内侧
//     const inSide = compare(left.right, right.left);
//     return outSide && inSide;
//   };
//   if (!root) return true;
//   return compare(root.left, root.right);
// }

// 迭代法(队列)
// function isSymmetric(root: TreeNode | null): boolean {
//   // 辅助队列
//   const queue: (TreeNode | null)[] = [];
//   if (!root) return true;
//   let left, right;
//   // 左右节点存进去
//   queue.push(root.left);
//   queue.push(root.right);
//   while (queue.length) {
//     left = queue.shift();
//     right = queue.shift();
//     // 两侧无值，但是还有另外一侧
//     if (left === null && right === null) continue;
//     // 左侧有值 右侧无值
//     if (left && right === null) return false;
//     // 左侧无值 右侧有值
//     if (left === null && right) return false;
//     // 都有值的情况下不相等
//     if (left.val !== right.val) return false;
//     // 存放外侧
//     queue.push(left.left);
//     queue.push(right.right);
//     // 存放内侧
//     queue.push(left.right);
//     queue.push(right.left);
//   }
//   return true;
// }

// 迭代法(栈)
function isSymmetric(root: TreeNode | null): boolean {
  const stack: (TreeNode | null)[] = [];
  let left, right;
  if (!root) return true;
  stack.push(root.left);
  stack.push(root.right);
  while (stack.length) {
    left = stack.pop();
    right = stack.pop();
    // 两侧无值，但是还有另外一侧
    if (left === null && right === null) continue;
    // 左侧有值 右侧无值
    if (left && right === null) return false;
    // 左侧无值 右侧有值
    if (left === null && right) return false;
    // 都有值的情况下不相等
    if (left.val !== right.val) return false;
    stack.push(left.left);
    stack.push(right.right);
    stack.push(left.right);
    stack.push(right.left);
  }
  return true;
}
// @lc code=end
