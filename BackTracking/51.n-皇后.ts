/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
  const chessboard: string[][] = new Array(n)
    .fill([])
    .map(() => new Array(n).fill("."));
  const result: string[][] = [];
  const isValid = (
    row: number,
    col: number,
    chessboard: string[][]
  ): boolean => {
    // 列
    for (let i = 0; i < row; i++) {
      if (chessboard[i][col] === "Q") return false;
    }
    // 左上135度斜线
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessboard[i][j] === "Q") return false;
    }
    // 右上45度斜线
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessboard[i][j] === "Q") return false;
    }

    return true;
  };

  const backTracking = (row: number, chessboard: string[][]) => {
    if (row === n) {
      return result.push(
        chessboard.reduce((pre, cur): string[] => {
          pre.push(cur.join(""));
          return pre;
        }, [])
      );
    }
    // 第几行
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessboard) === true) {
        // 校验通过
        chessboard[row][col] = "Q";
        backTracking(row + 1, chessboard);
        chessboard[row][col] = ".";
      }
    }
  };

  backTracking(0, chessboard);
  return result;
}
// @lc code=end
