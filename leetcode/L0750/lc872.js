/**
867. Transpose Matrix

Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.



 

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 

Note:

1 <= A.length <= 1000
1 <= A[0].length <= 1000
 */


/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const ROW = A.length;
    const COL = A[0].length;
    const ret = [];
    
    for ( let col = 0 ; col < COL ; col++ ) {
        let temp = [];
        for ( let row = 0; row < ROW ; row++ ) {
            temp.push(A[row][col]);
        }
        ret.push(temp);
    }
    
    return ret;
    
};

/**
[[1,2,3],[4,5,6],[7,8,9]]
[[1,2,3],[4,5,6]]
[[1,2,3]]
[[1],[2],[3]]
[[1]]
 */