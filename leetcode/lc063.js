/**
62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?



An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right


 */

// 2D Finbnacio

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // ignore invalid ones
    let n = obstacleGrid.length;
    if( n === 0 ) {
        return 0;
    }
    let m = obstacleGrid[0].length;
    if(m === 0) {
        return 0;
    }
    if( obstacleGrid[0][0] === 1 || obstacleGrid[n-1][m-1] === 1 ) {
        return 0;
    }
    // substitude, method will always be 0 if there is an obstacle
    for( let i = 0; i< n; i++) {
        for( let j = 0; j< m; j++ ) {
            if ( obstacleGrid[i][j] === 1 ) {
                obstacleGrid[i][j] = 0; 
            } else {
                obstacleGrid[i][j] = -1;
            }
        }
    };
    // console.log(obstacleGrid);
    // initial row, always be 1 if not obstacle
    for( let i =0; i < n; i++) {
        if( obstacleGrid[i][0] < 0 ) {
           obstacleGrid[i][0] = 1; 
        } else {
            // meet obstacles, then left all 0
            while( i < n ) {
                obstacleGrid[i][0] = 0;
                i++;
            }
        }
    }
    for( let i = 1; i < m ;i++ ) {
        if( obstacleGrid[0][i] < 0 ) {
           obstacleGrid[0][i] = 1; 
        } else {
            // meet obstacles, then left all 0
            while( i < m ) {
                obstacleGrid[0][i] = 0;
                i++;
            }
        }
    }
    // console.log(obstacleGrid);
    let minLen = Math.min( n, m );
    let index = 1; 
    while( index < minLen ) {
        // right
        for( let i = index; i< m ; i++ ) {
           if( obstacleGrid[index][i] < 0 ) {
               // ways goes,  left + top
               obstacleGrid[index][i] = obstacleGrid[index][i-1] + obstacleGrid[index-1][i];
           }  else {
               // meet obstacle, do nothing
           }
        }
        // down
        for( let i = index; i< n ; i++ ) {
           if( obstacleGrid[i][index] < 0 ) {
               // ways goes,  left + top
               obstacleGrid[i][index] = obstacleGrid[i][index-1] + obstacleGrid[i-1][index];
           }  else {
               // meet obstacle, do nothing
           }
        }  
        index++;
        // console.log( obstacleGrid );
    }
    return obstacleGrid[n-1][m-1];
};

console.log( uniquePathsWithObstacles( [
    [0,1]
  ] ) === 0 );

console.log( uniquePathsWithObstacles( [
    [1,0]
  ] ) === 0 );

console.log( uniquePathsWithObstacles( [
    [0,0, 1]
  ] ) === 0 );

console.log( uniquePathsWithObstacles( [
    [0], [1]
  ] ) === 0 );

console.log( uniquePathsWithObstacles( [
    [0], [0], [1]
  ] ) === 0 );

console.log( uniquePathsWithObstacles( [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ] ) === 2 );

console.log( uniquePathsWithObstacles( [
    [0,0,0,0],
    [1,1,0,0],
    [0,1,0,0]] ) === 3 );

console.log( uniquePathsWithObstacles( [
    [0,0,0,0],
    [1,1,0,0],
    [0,1,0,1]] ) === 0 );

console.log( uniquePathsWithObstacles( [
    [0,1,0,0],
    [1,1,0,0],
    [0,1,0,1]] ) === 0 );

