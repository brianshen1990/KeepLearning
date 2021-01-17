/**
695. Max Area of Island


Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.

 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0 ;
    if ( grid.length === 0 || grid[0].length === 0 ) {
        return max;
    }
    
    const ROW = grid.length;
    const COL = grid[0].length;
    
    const helper = (row, col) => {
        let ret = 0 ;
        if ( row >= 0 && row < ROW && col >=0 && col < COL ) {
            if ( grid[row][col] === 1 ) {
                ret = 1;
                grid[row][col] = 2;
                ret += helper(row-1, col);
                ret += helper(row+1, col);
                ret += helper(row, col-1);
                ret += helper(row, col+1);
            }
        }
        return ret;
    }
    
    for ( let row = 0 ; row < ROW ; row++ ) {
        for ( let col = 0 ; col < COL ; col++ ) {
            max = Math.max( max, helper(row, col) );
        }
    }
    
    return max;
};


/**
[[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
[[0,0,0,0,0,0,0,0]]
[[0]]
[[1]]
*/