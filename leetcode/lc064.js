/**
64. Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    let n = grid.length;
    if( n <= 0 ) {
        return 0;
    }
    let m = grid[0].length;
    if( m <= 0 ) {
        return 0;
    }
    let maxLen = Math.min(m, n);
    // initailize the confirmed ones
    for( let i = 1; i< m; i++ ) {
        grid[0][i] = grid[0][i] + grid[0][i-1];
    }
    for( let i = 1; i< n; i++) {
       grid[i][0] = grid[i][0] + grid[i-1][0]; 
    }
    console.log( grid );
    for( let i = 1; i < maxLen ; i++) {
        // right 
        for( let j = i; j < m; j++ ) {
            // left top
            grid[i][j] = grid[i][j] +  Math.min( grid[i][j-1], grid[i-1][j] );
        }
        // down
        for( let j =  i + 1 ; j < n ; j++) {
            grid[j][i] = grid[j][i] + Math.min( grid[j][i-1], grid[j-1][i] );
        }
        console.log( grid );
    }
    return grid[n-1][m-1];
};

console.log( minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ])  === 7);

console.log( minPathSum([
    [1,3,1]
  ])  === 5);

console.log( minPathSum([
    [1]
  ])  === 1);

  console.log( minPathSum([
    [1],[1]
  ])  === 2);

  console.log( minPathSum([
    []
  ])  === 0);

  console.log( minPathSum([[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]])  === 50);