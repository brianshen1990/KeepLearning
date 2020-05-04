/**
221. Maximal Square
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4

 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if ( matrix.length > 0 && matrix[0].length > 0 ) {
        // pass
    } else {
        return 0;
    }
    
    // construct
    let dpMatrix = [];
    for ( let i = 0; i<  matrix.length ; i++ ) {
        const temp = [];
        for ( let j = 0; j< matrix[0].length; j++ ) {
            temp.push(0);
        }
        dpMatrix.push(temp);
    }
    
    // init 
    for ( let i = 0; i < matrix[0].length ; i++ ) {
        if (matrix[0][i] === "1") {
            dpMatrix[0][i] = 1;
        }
    }
    for ( let j = 1; j < matrix.length ; j++ ) {
        if (matrix[j][0] === "1") {
            dpMatrix[j][0] = 1;
        }
    }
    
    // go dp 
    for ( let i = 1 ; i < matrix.length ; i++ ) {
        for ( let j = 1; j < matrix[0].length ; j++ ) {
            let max = 0;
            if ( matrix[i][j] === "1" ) {
                if (matrix[i-1][j] === "0" || matrix[i][j-1] === "0" ) {
                    max = 1;
                } else {
                    // both contains
                    max = Math.min(dpMatrix[i-1][j-1], dpMatrix[i-1][j], dpMatrix[i][j-1])+ 1;
                }
            }
            dpMatrix[i][j] = max;
        }
    }
    // console.log(dpMatrix)
    
    // results
    let maxSqure = 0;
    for ( let i = 0; i < dpMatrix.length ; i++ ) {
        for ( let j =0 ; j < dpMatrix[0].length ; j++ ) {
            maxSqure = Math.max(maxSqure,  dpMatrix[i][j] );
        }
    }
    return  maxSqure*maxSqure;
    
};

/**
[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","1","1","1"]]
[["1"]]
[["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","0","0","0"],["0","1","1","1","1","0","0","0"]]
 */