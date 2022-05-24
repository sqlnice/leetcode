/*
 * @lc app=leetcode.cn id=37 lang=typescript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const n: number = board.length;
  // 判断是否符合条件
  const isValid = (row: number, col: number, val: string): boolean => {
    // 判断行
    for (let colIndex = 0; colIndex < n; colIndex++) {
      if (board[row][colIndex] === val) return false;
    }

    // 判断列
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
      if (board[rowIndex][col] === val) return false;
    }

    // 判断九宫格
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let rowIndex = startRow; rowIndex < startRow + 3; rowIndex++) {
      for (let colIndex = startCol; colIndex < startCol + 3; colIndex++) {
        if (board[rowIndex][colIndex] === val) return false;
      }
    }
    return true;
  };
  const backTracking = () => {
    // 1.循环行
    for (let row = 0; row < n; row++) {
      // 2.循环列
      for (let col = 0; col < n; col++) {
        // 第一次  5
        // 第二次  3
        // 第三次  '.'
        if (board[row][col] !== ".") continue;
        for (let val = 1; val <= n; val++) {
          if (isValid(row, col, val + "")) {
            board[row][col] = val + "";
            if (backTracking()) return true;
            board[row][col] = ".";
          }
        }
        // 9个数循环结束都没找到，则不成立
        // 因为如果一行一列确定下来了，这里尝试了9个数都不行，说明这个棋盘找不到解决数独问题的解！
        return false;
      }
    }
    return true;
  };

  backTracking();
}
// @lc code=end
