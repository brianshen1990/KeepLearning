/**
1192. Critical Connections in a Network

There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

 

Example 1:



Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
 

Constraints:

1 <= n <= 10^5
n-1 <= connections.length <= 10^5
connections[i][0] != connections[i][1]
There are no repeated connections.

 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const _graph = {};
  
  const _visited = [];
  const _rank = [];
  
  for ( let i = 0 ; i < n ; i++ ) {
      _graph[i] = [];
      _visited[i] = false;
      _rank[i] = -1;
  }
  for ( let i = 0; i< connections.length ; i++ ) {
      _graph[ connections[i][0] ].push( connections[i][1] );
      _graph[ connections[i][1] ].push( connections[i][0] );
  }
  
  const _ret = [];
  // console.log( _graph );
  _rank[0] = 0;
  
  const _helperDfs = (point, prevPoint, curRank, graph, visited, rank, ret) => {
      // console.log( point, curRank, rank )
      visited[point] = true;
      rank[point] = curRank;
      for ( let i = 0 ; i < graph[point].length ; i++ ) {
          let nextPoint = graph[point][i];
          if ( prevPoint === nextPoint ) {
              // !! JUMP DUPLICATE ONE !!
              continue; 
          }
          
          if ( !visited[nextPoint] ) {
              _helperDfs( nextPoint, point, curRank+1, graph, visited, rank, ret );
          }
          
          // if there is a circle, !!AT LAST!! point will equal nextpoint
          let oriPoint = rank[point];
          // make it the nearest rank 
          rank[point] = Math.min( rank[point], rank[nextPoint] ); 
          
          // since DFS, nextPoint is already its nearest rank, 
          // if it doesn't become smaller, then, no circle found 
          if ( rank[nextPoint] > curRank ) { // !!! curRank !!!
              // console.log(point, nextPoint, oriPoint, rank[nextPoint], rank );
              ret.push( [point, nextPoint] );
          } 
      }
  }
  _helperDfs( 0, -1, 0, _graph, _visited, _rank, _ret );
  console.log( _rank );
  return _ret;
};

/**
4
[[0,1],[1,2],[2,0],[1,3]]
9
[[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[3,5],[5,6],[6,7],[7,8],[6,8]]
2
[[0,1]]
3
[[0,1],[1,2],[0,2]]
3
[[0,1],[1,2]]
10
[[1,0],[2,0],[3,0],[4,1],[5,3],[6,1],[7,2],[8,1],[9,6],[9,3],[3,2],[4,2],[7,4],[6,2],[8,3],[4,0],[8,6],[6,5],[6,3],[7,5],[8,0],[8,5],[5,4],[2,1],[9,5],[9,7],[9,4],[4,3]]
 */