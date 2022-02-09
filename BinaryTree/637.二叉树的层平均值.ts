/*
 * @lc app=leetcode.cn id=637 lang=typescript
 *
 * [637] 二叉树的层平均值
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

function averageOfLevels(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    // 当前行总和
    let curLevelSum = 0;
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      curLevelSum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(curLevelSum / length);
  }
  return res;
}
// @lc code=end
