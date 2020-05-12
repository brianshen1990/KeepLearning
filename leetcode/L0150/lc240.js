/**
240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.

 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if ( !(matrix.length > 0 && matrix[0].length > 0) ) {
        return false;
    }
    
    // init
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    let m = ROWS - 1;
    let n = 0;
    let found = false;
    
    // recursive 
    while ( m >= 0 && n < COLS ) {
        if ( matrix[m][n] === target ) {
            found = true;
            break;
        } else if ( matrix[m][n] > target ) {
            m--;
        } else if ( matrix[m][n] < target ) {
            n++;
        }
    }
    
    // res
    return found;
    
};

/**
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
5
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
20
[[]]
20
[[20]]
20
[[21]]
20
 */