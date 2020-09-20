/**

1594. Maximum Non Negative Product in a Matrix

You are given a rows x cols matrix grid. Initially, you are located at the top-left corner (0, 0), and in each step, you can only move right or down in the matrix.

Among all possible paths starting from the top-left corner (0, 0) and ending in the bottom-right corner (rows - 1, cols - 1), find the path with the maximum non-negative product. The product of a path is the product of all integers in the grid cells visited along the path.

Return the maximum non-negative product modulo 109 + 7. If the maximum product is negative return -1.

Notice that the modulo is performed after getting the maximum product.

 

Example 1:

Input: grid = [[-1,-2,-3],
               [-2,-3,-3],
               [-3,-3,-2]]
Output: -1
Explanation: It's not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.
Example 2:

Input: grid = [[1,-2,1],
               [1,-2,1],
               [3,-4,1]]
Output: 8
Explanation: Maximum non-negative product is in bold (1 * 1 * -2 * -4 * 1 = 8).
Example 3:

Input: grid = [[1, 3],
               [0,-4]]
Output: 0
Explanation: Maximum non-negative product is in bold (1 * 0 * -4 = 0).
Example 4:

Input: grid = [[ 1, 4,4,0],
               [-2, 0,0,1],
               [ 1,-1,1,1]]
Output: 2
Explanation: Maximum non-negative product is in bold (1 * -2 * 1 * -1 * 1 * 1 = 2).
 

Constraints:

1 <= rows, cols <= 15
-4 <= grid[i][j] <= 4

 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    // sneg, bpos, zero
    const matrix = [];
    for ( let i = 0 ; i < grid.length ; i++ ) {
        let row = []
        for ( let j = 0 ; j < grid[0].length ; j++ ) {
            row.push( { neg: 1, pos: -1, zero: false } );   
        }
        matrix.push( row );
    }
    
    matrix[0][0] = { neg: grid[0][0] < 0 ? grid[0][0] : 1, 
                    pos: grid[0][0] > 0 ? grid[0][0] : -1, 
                    zero: grid[0][0] === 0 };
    
    
    for ( let i = 0 ; i < grid.length ; i++ ) {
        for ( let j = 0 ; j < grid[0].length ; j++ ) {
            if ( i > 0 ) { // upper
                if ( grid[i][j] > 0 && matrix[i-1][j].pos > 0 ) {
                    matrix[i][j].pos = Math.max( matrix[i][j].pos, grid[i][j] * matrix[i-1][j].pos );
                }
                if ( grid[i][j] < 0 && matrix[i-1][j].neg < 0 ) {
                     matrix[i][j].pos = Math.max( matrix[i][j].pos, grid[i][j] * matrix[i-1][j].neg );      
                }
                if ( grid[i][j] > 0 && matrix[i-1][j].neg < 0 ) {
                    matrix[i][j].neg = Math.min( matrix[i][j].neg, grid[i][j] * matrix[i-1][j].neg );
                }
                if ( grid[i][j] < 0 && matrix[i-1][j].pos > 0 ) {
                    // console.log( "hit", i, j, grid[i][j], matrix[i-1][j].pos )
                    matrix[i][j].neg = Math.min( matrix[i][j].neg, grid[i][j] * matrix[i-1][j].pos );
                }
                if ( grid[i][j] === 0 || matrix[i-1][j].zero === true ) {
                    matrix[i][j].zero = true;
                }
            }
            if ( j > 0 ) {
                if ( grid[i][j] > 0 && matrix[i][j-1].pos > 0 ) {
                    matrix[i][j].pos = Math.max( matrix[i][j].pos, grid[i][j] * matrix[i][j-1].pos );
                }
                if ( grid[i][j] < 0 && matrix[i][j-1].neg < 0 ) {
                     matrix[i][j].pos = Math.max( matrix[i][j].pos, grid[i][j] * matrix[i][j-1].neg );      
                }
                if ( grid[i][j] > 0 && matrix[i][j-1].neg < 0 ) {
                    matrix[i][j].neg = Math.min( matrix[i][j].neg, grid[i][j] * matrix[i][j-1].neg );
                }
                if ( grid[i][j] < 0 && matrix[i][j-1].pos > 0 ) {
                    matrix[i][j].neg = Math.min( matrix[i][j].neg, grid[i][j] * matrix[i][j-1].pos );
                }
                if ( grid[i][j] === 0 || matrix[i][j-1].zero === true ) {
                    matrix[i][j].zero = true;
                }
            }
        }
    }
    
    // console.log( matrix );
    const point = matrix[ matrix.length-1 ][ matrix[0].length-1 ];
    if ( point.pos > 0 ) {
        return point.pos % 1000000007;
    } else if ( point.zero === true ) {
        return 0;
    } else {
        return -1;
    }
    
};

/**
[[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]
[[1,-2,1], [1,-2,1], [3,-4,1]]
[[1, 3], [0,-4]]
[[ 1, 4,4,0], [-2, 0,0,1], [ 1,-1,1,1]]

 */