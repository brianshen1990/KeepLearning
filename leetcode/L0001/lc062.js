/**
62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28

 */

// 2D Finbnacio

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if( m === 0 || n === 0){
        return 0;
    }
    if( m === 1 && n === 1){
        return 1;
    }
    let Matrix = new Array(n);
    for( let i = 0; i< n ; i++ ) {
        Matrix[i] = new Array(m);
    }
    for( let i = 0; i< m ; i++ ) {
        Matrix[0][i] = 1;
    }
    for( let i = 0; i< n ; i++ ) {
        Matrix[i][0] = 1;
    }
    let row = 1;
    while( row < m && row < n ) {
        // row
        for( let i = row; i< m; i++ ) {
            Matrix[row][i] =  Matrix[row][i-1] + Matrix[row-1][i]; // left + top 
        }
        for( let i = row; i< n; i++ ){
            Matrix[i][row] =  Matrix[i][row-1] + Matrix[i-1][row]; // left + top 
        }
        // console.log( Matrix );
        row++;
    }
    return Matrix[n-1][m-1];
};


console.log( uniquePaths(0,0) === 0 );
console.log( uniquePaths(1,1) === 1 );
console.log( uniquePaths(3,2) === 3 );
// console.log( uniquePaths(3,3) === 28 );
console.log( uniquePaths(7,3) === 28 );
console.log( uniquePaths(9,18) === 1081575 );
console.log( uniquePaths(18,9) === 1081575 );
console.log( uniquePaths(18,1) === 1 );
console.log( uniquePaths(1,18) === 1 );

