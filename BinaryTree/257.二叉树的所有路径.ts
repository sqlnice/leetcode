/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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
// function binaryTreePaths(root: TreeNode | null): string[] {
//   const recur = (node: TreeNode, route: string, resArr: Array<string>) => {
//     route += node.val
//     const { left, right } = node
//     if (!left && !right) return resArr.push(route)
//     if (left) recur(left, route + '->', resArr)
//     if (right) recur(right, route + '->', resArr)
//   }
//   const resArr: string[] = []
//   if (!root) return resArr
//   recur(root, '', resArr)
//   return resArr
// }
// 迭代
// function binaryTreePaths(root: TreeNode | null): string[] {
//   if (!root) return []
//   const stack: TreeNode[] = [root]
//   const routes = ['']
//   const resArr: string[] = []
//   while (stack.length) {
//     const node = stack.pop()
//     let route = routes.pop()
//     if (!node.left && !node.right) {
//       resArr.push(route + node.val)
//       continue
//     }
//     route += node.val + '->'
//     if (node.left) {
//       stack.push(node.left)
//       routes.push(route)
//     }
//     if (node.right) {
//       stack.push(node.right)
//       routes.push(route)
//     }
//   }
//   return resArr
// }
// 回溯
function binaryTreePaths(root: TreeNode | null): string[] {
  const getPath = (root:TreeNode | null, path:number[], result:string[]) => {
        path.push(root.val);
        if (root.left === null && root.right === null) {
            let n = path.length;
            let str = '';
            for (let i=0; i<n-1; i++) {
                str += path[i] + '->';
            }
            str += path[n-1];
            result.push(str);
        }

        if (root.left !== null) {
            getPath(root.left, path, result);
            path.pop();   // 回溯
        }

        if (root.right !== null) {
            getPath(root.right, path, result);
            path.pop(); 
        }
    }
    
    if (root === null) return [];
    let result:string[] = [];
    let path:number[] = [];
    getPath(root, path, result);
    return result;
}
// @lc code=end
