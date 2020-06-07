/**
980. Unique Paths III

On a 2-dimensional grid, there are 4 types of squares:

1 represents the starting square.  There is exactly one starting square.
2 represents the ending square.  There is exactly one ending square.
0 represents empty squares we can walk over.
-1 represents obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

 

Example 1:

Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
Example 2:

Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
Example 3:

Input: [[0,1],[2,0]]
Output: 0
Explanation: 
There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.
 

Note:

1 <= grid.length * grid[0].length <= 20
 */



/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    if ( !( grid.length > 0 && grid[0].length > 0 ) ) {
        return 0;
    } 
    
    const helperValidate = ( matrix ) => {
        let validate = true;
        for ( let i = 0 ; i < matrix.length ; i++ ) {
            for ( let j = 0; j < matrix[0].length ; j++ ) {
                if ( matrix[i][j] === 0 ||  matrix[i][j] === 2 ) {
                    validate = false;
                    break;
                }
            }
            if ( !validate ) {
                break;
            }
        }
        return validate;
    }
    
    const helperDFS = (matrix, row, col, arr, res) => {
        if ( matrix[row][col] === 2 ) {
            matrix[row][col] = -1;
            let validate = helperValidate(matrix);
            if ( validate ) {
                res.val += 1;
                console.log( "hit", arr );
            }
            matrix[row][col] = 2;
            return;
        }
        
        let temp = matrix[row][col];
        matrix[row][col] = -1;
        arr.push([row, col]);
        
        let found = false;
        // right
        if ( col < matrix[0].length - 1 && 
            ( matrix[row][col+1] === 0 || matrix[row][col+1] === 2 ) ) {
            found = true;
            helperDFS( matrix, row, col + 1, arr,  res);
        }
        // down
        if ( row < matrix.length - 1 && 
            ( matrix[row+1][col] === 0 || matrix[row+1][col] === 2 ) ) {
            found = true;
            helperDFS( matrix, row + 1, col, arr,  res);
        }
        // left
        if ( col > 0 && 
            ( matrix[row][col-1] === 0 || matrix[row][col-1] === 2 ) ) {
            found = true;
            helperDFS( matrix, row, col - 1, arr,  res);
        }
        // top
        if ( row > 0 && 
            ( matrix[row-1][col] === 0 || matrix[row-1][col] === 2 ) ) {
            found = true;
            helperDFS( matrix, row - 1, col, arr,  res);
        }
        
        arr.pop();
        matrix[row][col] = temp;
        
    }
    
    // init start position
    const ret = { val : 0 };
    let begRow = -1, begCol = -1;
    for ( let i = 0; i < grid.length; i++ ) {
        for ( let j = 0 ; j < grid[0].length ; j++ ) {
            if ( grid[i][j] === 1 ) {
                begRow = i;
                begCol = j;
                break;
            } 
        }
        if ( begRow !== -1 ) {
            break;
        }
    }
    
    helperDFS( grid, begRow, begCol, [], ret );

    return ret.val;
    
};

/**
[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
[[1,0,0,0],[0,0,0,0],[0,0,0,2]]
[[0,1],[2,0]]
 */