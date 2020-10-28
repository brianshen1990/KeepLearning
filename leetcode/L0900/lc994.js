/**
994. Rotting Oranges
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

 

Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.


 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let ret = 0;
  while (true) {
      let found = [];
      for ( let i = 0; i < grid.length ; i++ ) {
          for ( let j = 0; j < grid[0].length ; j++ ) {
              if ( grid[i][j] === 2 ) {
                  if ( i > 0 && grid[i-1][j] === 1 ) {
                      found.push({
                          x: i-1,
                          y: j
                      });
                  }
                  if ( i < grid.length-1 && grid[i+1][j] === 1 ) {
                      found.push({
                          x: i+1,
                          y: j
                      });
                  }
                  if ( j > 0 && grid[i][j-1] === 1 ) {
                      found.push({
                          x: i,
                          y: j-1
                      });
                  }
                  if ( j < grid[0].length -1 && grid[i][j+1]  === 1) {
                      found.push({
                          x: i,
                          y: j+1
                      });
                  }
              }
          }
      }
      if (found.length <= 0) {
          break;
      } else {
          // set rotting 
          found.map( item => {
             grid[item.x][item.y] = 2;
          });
          ret++;
      }
  }
  let foundFresh = false;
  for ( let i = 0; i < grid.length ; i++ ) {
      for ( let j = 0; j < grid[0].length; j++ ) {
          if ( grid[i][j] === 1 ) {
              foundFresh = true;
              break;
          }
      }
      if ( foundFresh ) {
          break;
      }
  }
  if ( foundFresh ) {
      return -1;
  } else {
      return ret;
  }
  
};

/**
[[2,1,1],[1,1,0],[0,1,1]]
[[2,1,1],[0,1,1],[1,0,1]]
[[0,2]]

 */