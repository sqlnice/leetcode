/*
 * @lc app=leetcode.cn id=332 lang=typescript
 *
 * [332] 重新安排行程
 */
// tickets = [
//   ["JFK", "SFO"],
//   ["JFK", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "JFK"],
//   ["ATL", "SFO"],
// ];
// @lc code=start
// function findItinerary(tickets: string[][]): string[] {
//   const resultRoute: string[] = ["JFK"];
//   const map: { [index: string]: string[] } = {};

//   // 转为 Map
//   // {
//   //  JFK:['SFO','ATL'],
//   //  SFO:['ATL'],
//   //  ATL:['JFK','SFO']
//   // }
//   for (let i = 0; i < tickets.length; i++) {
//     const [from, to] = tickets[i];
//     (map[from] || (map[from] = [])).push(to);
//   }

//   // 对城市进行排序
//   // {
//   //  JFK:['ATL','SFO'],
//   //  SFO:['ATL'],
//   //  ATL:['JFK','SFO']
//   // }
//   for (const city in map) {
//     map[city].sort();
//   }

//   const backTracking = () => {
//     // 行程已找到
//     if (resultRoute.length === tickets.length + 1) return true;
//     // 没有目的地提前结束
//     if (
//       !map[resultRoute[resultRoute.length - 1]] ||
//       !map[resultRoute[resultRoute.length - 1]].length
//     ) {
//       return false;
//     }
//     // 取已走过的行程最后一个的 目的地集合
//     for (let i = 0; i < map[resultRoute[resultRoute.length - 1]].length; i++) {
//       // 第一次循环就是 'JFK': [ 'ATL', 'SFO']
//       // 'ATL'
//       const city = map[resultRoute[resultRoute.length - 1]][i];
//       // 把当前目的城市删除，防止循环
//       map[resultRoute[resultRoute.length - 1]].slice(i, 1);
//       resultRoute.push(city);
//       if (backTracking()) return true;
//       resultRoute.pop();
//       map[resultRoute[resultRoute.length - 1]].splice(i, 0, city);
//     }
//   };

//   backTracking();
//   return resultRoute;
// }
function findItinerary(tickets: string[][]): string[] {
  /**
        TicketsMap 实例：
        { NRT: Map(1) { 'JFK' => 1 }, JFK: Map(2) { 'KUL' => 1, 'NRT' => 1 } }
        这里选择Map数据结构的原因是：与Object类型的一个主要差异是，Map实例会维护键值对的插入顺序。
     */
  type TicketsMap = {
    [index: string]: Map<string, number>;
  };
  tickets.sort((a, b) => {
    return a[1] < b[1] ? -1 : 1;
  });
  const ticketMap: TicketsMap = {};
  for (const [from, to] of tickets) {
    if (ticketMap[from] === undefined) {
      ticketMap[from] = new Map();
    }
    ticketMap[from].set(to, (ticketMap[from].get(to) || 0) + 1);
  }
  const resRoute = ["JFK"];
  backTracking(tickets.length, ticketMap, resRoute);
  return resRoute;
  function backTracking(
    ticketNum: number,
    ticketMap: TicketsMap,
    route: string[]
  ): boolean {
    if (route.length === ticketNum + 1) return true;
    const targetMap = ticketMap[route[route.length - 1]];
    if (targetMap !== undefined) {
      for (const [to, count] of targetMap.entries()) {
        if (count > 0) {
          route.push(to);
          targetMap.set(to, count - 1);
          if (backTracking(ticketNum, ticketMap, route) === true) return true;
          targetMap.set(to, count);
          route.pop();
        }
      }
    }
    return false;
  }
}

// @lc code=end
