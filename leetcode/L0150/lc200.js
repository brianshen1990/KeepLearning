/**
200. Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
 */


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    // console.log( grid );
    if ( ! ( grid.length > 0 && grid[0].length > 0 ) ) {
        return 0;
    }
    
    const helper = (matrix, row, col) => {
        matrix[row][col] = '2';
        if ( row > 0 && matrix[row-1][col] === '1' ) {
            helper( matrix, row-1, col );
        }
        if ( row < matrix.length-1 && matrix[row+1][col] === '1' ) {
            helper( matrix, row+1, col );
        }
        if ( col > 0 && matrix[row][col-1] === '1' ) {
            helper( matrix, row, col-1 );
        }
        if ( col < matrix[0].length-1 && matrix[row][col+1] === '1' ) {
            helper( matrix, row, col+1 );
        }
    }
    
    let ret = 0;
    for ( let i = 0 ; i < grid.length ; i++ ) {
        for ( let j = 0 ; j < grid[0].length ; j++ ) {
            if ( grid[i][j] === '1' ) {
                ret++;
                helper( grid, i, j);
            } 
        }  
    }        

    return ret;
};


/**
[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
[[]]
[["1"]]
[["1", "0"]]
[["1", "0", "1"]]
*/
