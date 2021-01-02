/**

542. 01 Matrix

Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 

Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.

*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    
    
    if ( !(matrix.length > 0 && matrix[0].length > 0) ) {
        return matrix;
    }
    
    const ROW = matrix.length;
    const COL = matrix[0].length;
    // init
    for ( let i = 0 ; i < matrix.length ; i++ ) {
        for ( let j = 0 ; j < matrix[0].length ; j++ ) {
            if ( matrix[i][j] !== 0 ) {
                matrix[i][j] = ROW + COL - 1;
            }
        }
    }
    
    const DFS = ( row, col ) => {
        // up 
        if ( row > 0 && matrix[row-1][col]-1 > matrix[row][col] ) {
            matrix[row-1][col] = matrix[row][col] + 1;
            DFS( row-1, col );
        }
        // down
        if ( row < ROW-1 && matrix[row+1][col]-1 > matrix[row][col] ) {
            matrix[row+1][col] = matrix[row][col] + 1;
            DFS( row+1, col );
        }
        // left
        if ( col > 0 && matrix[row][col-1]-1 > matrix[row][col] ) {
            matrix[row][col-1] = matrix[row][col] + 1;
            DFS( row, col-1 );
        }
        // right
        if ( col < COL-1 && matrix[row][col+1]-1 > matrix[row][col] ) {
            matrix[row][col+1] = matrix[row][col] + 1;
            DFS( row, col+1 );
        }
    }
    
    // iter and DFS untill stop
    for ( let i = 0 ; i < matrix.length ; i++ ) {
        for ( let j = 0 ; j < matrix[0].length ; j++ ) {
            if ( matrix[i][j] === 0 ) {
                DFS(i, j, 0);
            }
        }
    }
    return matrix;
    
};

/**
[[0,0,0],[0,1,0],[0,0,0]]
[[0,0,0],[0,1,0],[1,1,1]]
[[1,0]]
[[1],[0]]
 */