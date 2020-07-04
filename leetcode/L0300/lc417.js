/**
417. Pacific Atlantic Water Flow

Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.
 

Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }
    
    // init cache
    const cacheP = new Array(matrix.length);
    const cacheA = new Array(matrix.length);
    for ( let i = 0 ; i < matrix.length ; i++ ) {
        cacheP[i] = new Array(matrix[0].length).fill(0);
        cacheA[i] = new Array(matrix[0].length).fill(0);
        // 0 don't know, 1 yes, -1 no
    }
    
    for ( let i = 0 ; i < matrix[0].length ; i++ ) {
        cacheP[0][i] = 1;
        cacheA[ matrix.length-1 ][i] = 1;
    }
    for ( let i = 0 ; i < matrix.length ; i++ ) {
        cacheP[i][0] = 1;
        cacheA[i][matrix[0].length-1] = 1;
    }
    // console.log(cacheP, cacheA);
    
    // cacl Pac
    const helperP = (row, col) => {
        if ( cacheP[row][col] !== 0 ) {
            return cacheP[row][col] === 1;
        }
        
        const keep = matrix[row][col];
        matrix[row][col] = -1;
        let found = false;
        // up 
        if ( matrix[row-1][col] !== -1 && keep >= matrix[row-1][col] && helperP(row-1, col) ) {
            found = true;
        }
        // left
        if ( (!found) && matrix[row][col-1] !== -1  && keep >= matrix[row][col-1] && helperP(row, col-1) ) {
            found = true;
        }
        // down
        if ( (!found) && row < matrix.length - 1 && matrix[row+1][col] !== -1 && keep >= matrix[row+1][col] && helperP(row+1,col) ) {
            found = true;
        }
        if ( (!found) && col < matrix[0].length - 1 && matrix[row][col+1] !== -1 && keep >= matrix[row][col+1] && helperP(row, col+1) ) {
            found = true;
        }
        if ( found ) {
            cacheP[row][col] = 1;
        }
        matrix[row][col] = keep;
        return found; 
    }
    for ( let row = 1; row < matrix.length; row++ ) {
        for ( let col = 1 ; col < matrix[0].length ; col++ ) {
            cacheP[row][col] = helperP(row, col) ? 1 : -1;
        }
    }
    
    // cacl Atl
    const helperA = (row, col) => {
        if ( cacheA[row][col] !== 0 ) {
            return cacheA[row][col] === 1;
        }
        
        const keep = matrix[row][col];
        matrix[row][col] = -1;
        let found = false;
         // down
        if ( matrix[row+1][col] !== -1 && keep >= matrix[row+1][col] && helperA(row+1,col) ) {
            found = true;
        }
        // right
        if ( (!found)  && matrix[row][col+1] !== -1 && keep >= matrix[row][col+1] && helperA(row, col+1) ) {
            found = true;
        }
        // up 
        if (  (!found) && row > 0 && matrix[row-1][col] !== -1 && keep >= matrix[row-1][col] && helperA(row-1, col) ) {
            found = true;
        }
        // left
        if ( (!found) && col > 0 && matrix[row][col-1] !== -1  && keep >= matrix[row][col-1] && helperA(row, col-1) ) {
            found = true;
        }
        if ( found ) {
            cacheA[row][col] = 1;
        }
        matrix[row][col] = keep;
        return found; 
    }
    for ( let row = matrix.length-1; row >= 0 ; row-- ) {
        for ( let col = matrix[0].length - 1 ; col >= 0  ; col-- ) {
            cacheA[row][col] = helperA(row, col) ? 1 : -1;
        }
    }
    
    // console.log(cacheP, cacheA );
    // console.log(cacheP[11][3], cacheA[11][3] );
    
    // res
    let ret = [];
    for ( let row = 0; row < matrix.length ; row++ ) {
        for ( let col = 0 ; col < matrix[0].length ; col++ ) {
            if ( cacheA[row][col] === 1 && cacheP[row][col] === 1 ) {
                ret.push( [row, col] ); 
            }
        }
    }
    
    return ret;
};

/** 
[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
[[1,2,2,3,5]]
[[1],[3],[2],[6],[5]]
[[1,2,2,3,5],[3,2,3,4,4]]
[[8,13,11,18,14,16,16,4,4,8,10,11,1,19,7],[2,9,15,16,14,5,8,15,9,5,14,6,10,15,5],[15,16,17,10,3,6,3,4,2,17,0,12,4,1,3],[13,6,13,15,15,16,4,10,7,4,19,19,4,9,13],[7,1,9,14,9,11,5,4,15,19,6,0,0,13,5],[9,9,15,12,15,5,1,1,18,1,2,16,15,18,9],[13,0,4,18,12,0,11,0,1,15,1,15,4,2,0],[11,13,12,16,9,18,6,8,18,1,5,12,17,13,5],[7,17,2,5,0,17,9,18,4,13,6,13,7,2,1],[2,3,9,0,19,6,6,15,14,4,8,1,19,5,9],[3,10,5,11,7,14,1,5,3,19,12,5,2,13,16],[0,8,10,18,17,5,5,8,2,11,5,16,4,9,14],[15,9,16,18,9,5,2,5,13,3,10,19,9,14,3],[12,11,16,1,10,12,6,18,6,6,18,10,9,5,2],[17,9,6,6,14,9,2,2,13,13,15,17,15,3,14],[18,14,12,6,18,16,4,10,19,5,6,8,9,1,6]]
*/