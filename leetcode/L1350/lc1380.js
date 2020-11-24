/**
1380. Lucky Numbers in a Matrix

Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 

Example 1:

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
Example 2:

Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
Example 3:

Input: matrix = [[7,8],[1,2]]
Output: [7]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= n, m <= 50
1 <= matrix[i][j] <= 10^5.
All elements in the matrix are distinct.

 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const minRow = matrix.map( item => Math.min(...item) );
    const maxCol = matrix[0].map( 
        (_, index) => Math.max(... matrix.map( item => item[index] )));
    
    console.log( minRow, maxCol );
    
    let ret = [];
    for ( let row = 0 ; row < matrix.length ; row++ ) {
        for ( let col = 0 ; col < matrix[0].length ; col++ ) {
            if ( matrix[row][col] === minRow[row] && minRow[row] === maxCol[col] ) {
                ret.push(matrix[row][col]);
            }
        }
    }
    
    return ret;
    
};

/**
[[3,7,8],[9,11,13],[15,16,17]]
[[1,10,4,2],[9,3,8,7],[15,16,17,12]]
[[7,8],[1,2]]
 */