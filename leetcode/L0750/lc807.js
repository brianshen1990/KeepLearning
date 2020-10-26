/**
807. Max Increase to Keep City Skyline

In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: 
The grid is:
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

Notes:

1 < grid.length = grid[0].length <= 50.
All heights grid[i][j] are in the range [0, 100].
All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] rectangular prism.

 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const ROWS_MAX = [];
    for ( let i = 0 ; i < grid.length ; i++ ) {
        ROWS_MAX.push( Math.max( ...grid[i] ) );
    }
    
    const COLS_MAX = [];
    for ( let i = 0 ; i < grid[0].length ; i++ ) {
        COLS_MAX.push( Math.max( ...grid.map( row => row[i] ) ) );
    }
    
    let sum = 0 ;
    for ( let i = 0 ; i < grid.length ; i++ ) {
        for ( let j = 0 ; j < grid[0].length ; j++ ) {
            sum += Math.min( ROWS_MAX[i], COLS_MAX[j] ) - grid[i][j];   
        }
    }
    
    return sum;
};


/**
[[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
[[1]]
[[3,0,8],[2,4,5],[9,2,6],[0,3,1]]
 */