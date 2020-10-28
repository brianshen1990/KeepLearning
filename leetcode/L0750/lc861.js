/**

861. Score After Flipping Matrix

We have a two dimensional matrix A where each value is 0 or 1.

A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.

After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score.



Example 1:

Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39


Note:

1 <= A.length <= 20
1 <= A[0].length <= 20
A[i][j] is 0 or 1.
*/

/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    const LEN = A.length;
    const COLS = A[0].length;
    for ( let i = 0 ; i < A.length ; i++ ) {
        if ( A[i][0] === 0 ) {
            A[i] = A[i].map( item => 1-item );
        }
    }
    // console.log( A );
    let ret = LEN * 2 ** (COLS-1);
    // console.log( ret );

    for ( let i = 1 ; i < A[0].length ; i++ ) {
        let len1 = A.map(item => item[i]).filter(item => item).length;
        ret += 2 ** ( COLS-1-i )  * Math.max(LEN-len1, len1);
    }
    return ret;
};

/**
[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
[[0,0,1,1],[1,0,1,0]]
[[0]]
[[0,0,1,1]]
[[0],[1],[1]]
  */
