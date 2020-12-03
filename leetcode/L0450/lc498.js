/**

498. Diagonal Traverse

Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

 

Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Explanation:

 

Note:

The total number of elements of the given matrix will not exceed 10,000.
 */


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if ( !(matrix.length > 0 && matrix[0].length > 0) ) {
        return [];
    }
    
    let reverse = false;
    let max = matrix.length + matrix[0].length - 1;
    
    let ret = [];
    for ( let i = 0 ; i <= max ; i++ ) {
        if ( reverse ) {
            for ( let j = 0 ; j <= i ; j++ ) {
                if ( j >= 0 && j < matrix.length && i-j >=0 && i-j < matrix[0].length ) {
                    ret.push( matrix[j][i-j] );
                }
            }
        } else {
            for ( let j = i ; j >=0 ; j-- ) {
                if ( j >= 0 && j < matrix.length && i-j >=0 && i-j < matrix[0].length ) {
                    ret.push( matrix[j][i-j] );
                }
            }
        }
        reverse = !reverse;
    }
    
    return ret;
};

/**
[[1,2,3],[4,5,6],[7,8,9]]
[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
[[1]]
[[1,2,3]]
[[1],[2],[3]]
[]
 */