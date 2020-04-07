/**

48. Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const LEVEL = Math.floor(matrix.length/2);
  for( let level = 0; level < LEVEL ; level++ ){
    const MAX_IND = matrix.length - 1 - level;  
    const MAX_LENGTH = matrix.length-1;  // 3
    for( let i = level ; i < MAX_IND; i++ ) {
      let temp = matrix[level][i];
      matrix[level][i] = matrix[MAX_LENGTH-i][level];
      matrix[MAX_LENGTH-i][level] = matrix[MAX_LENGTH-level][MAX_LENGTH-i];
      
      
      matrix[MAX_LENGTH-level][MAX_LENGTH-i] = matrix[i][MAX_LENGTH-level];
      matrix[i][MAX_LENGTH-level] = temp;
    }
  }
};

const speConsole = function (matrix){
  console.log('[');
  for( let i = 0; i< matrix.length ; i++  ){
    console.log(`  ${matrix[i]}`)
  }
  console.log(']');
}

const matrix2 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
speConsole( matrix2 );
rotate( matrix2 );
speConsole( matrix2 );

const matrix3 = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];
speConsole( matrix3 );
rotate( matrix3 );
speConsole( matrix3 );

const matrix5 = [
  [ 5, 1, 9,11,1],
  [ 2, 4, 8,10,1],
  [13, 3, 6, 7,1],
  [15,14,12,16,1],
  [2,2,2,2,2]
];
speConsole( matrix5 );
rotate( matrix5 );
speConsole( matrix5 );
rotate( matrix5 );
speConsole( matrix5 );
rotate( matrix5 );
speConsole( matrix5 );
rotate( matrix5 );
speConsole( matrix5 );

