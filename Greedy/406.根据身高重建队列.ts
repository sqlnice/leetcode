/*
 * @lc app=leetcode.cn id=406 lang=typescript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
function reconstructQueue(people: number[][]): number[][] {
  const queue: number[][] = [];
  people.sort((a, b) => {
    // 身高相同情况下，谁前面人少谁在前面
    if (a[0] === b[0]) return a[1] - b[1];
    // 身高不同情况下，谁高谁在前面
    return b[0] - a[0];
  });

  /**
   * 按照前面几个人排
   * [[7,0], [7,1], [6,1], [5,0], [5,2]，[4,4]]
   * ------------------------------------------
   * 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻
   * 插入[7,0]：[[7,0]]
   * 插入[7,1]：[[7,0],[7,1]]
   * 插入[6,1]：[[7,0],[6,1],[7,1]]
   * 插入[5,0]：[[5,0],[7,0],[6,1],[7,1]]
   * 插入[5,2]：[[5,0],[7,0],[5,2],[6,1],[7,1]]
   * 插入[4,4]：[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
   */
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i]);
  }
  return queue;
}
// @lc code=end
