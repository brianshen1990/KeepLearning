/**
74. Search a 2D Matrix
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if( matrix.length === 0 ) {
      return false;
  }
  if( matrix[0].length === 0 ) {
      return false;
  }
  let row = matrix.length;
  let col = matrix[0].length;
  if( matrix[0][0] > target ) {
      return false;
  }
  if( matrix[row-1][col-1] < target ) {
      return false;
  }
  // find in which row 
  let beg = 0;
  let end = row;
  let middle = 0;
  // find row
  while( end > beg + 1 ) {
      middle = Math.floor( (end + beg) / 2 );
      if( matrix[middle][0] === target ){
          return true;
      }
      if ( matrix[middle][0] < target ) {
          beg = middle;
      } else {
          end = middle;
      }
  }
  let findRow = beg;
  if( end < row && matrix[end][0] <= target) {
      findRow = end;
  }
  if( matrix[findRow][0] === target ) {
      return true;
  }
  // find col
  beg = 0;
  end = col;
  while( end > beg + 1 ) {
      middle = Math.floor( (end + beg) / 2 );
      if( matrix[findRow][middle] === target ){
          return true;
      }
      if ( matrix[findRow][middle] < target ) {
          beg = middle;
      } else {
          end = middle;
      }
  }
  if( matrix[findRow][beg] === target || (end < col && matrix[findRow][end] === target )) {
      return true;
  }
  return false;
};

console.log( searchMatrix( [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 3) === true );


console.log( searchMatrix( [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 13) === false );

console.log( searchMatrix( [
  [1,   3,  5,  7],
  [10, 11, 16, 20]
], 3) === true );

console.log( searchMatrix( [
  [1,   3,  5,  7],
  [10, 13, 16, 20]
], 11) === false );

console.log( searchMatrix( [
  [1,   3,  5,  7]
], 4) === false );
console.log( searchMatrix( [
  [1,   3,  5,  7]
], 5) === true );

console.log( searchMatrix( [
  [1,   3,  5,  7]
], 4) === false );

console.log( searchMatrix( [
  [1]
], 1) === true );

console.log( searchMatrix( [
  [1],
  [10]
], 3) === false );

console.log( searchMatrix( [
  [1],
  [10],
  [20]
], 11) === false );

console.log( searchMatrix( [
  [1],
  [10],
  [20]
], 20) === true );

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix2nd = function(matrix, target) {
  if ( !(matrix.length > 0 && matrix[0].length > 0) ) {
      return false;
  }
  
  // init
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  let begin = 0; 
  let end = ROWS * COLS-1;
  let middle = -1;
  const _helper = (_middle) => {
      let _row = Math.floor( _middle / COLS );
      let _col = _middle - _row * COLS;
      return {_row, _col};
  } 
  
  // recursive 
  while ( begin + 1 < end ) {
      middle = begin + Math.floor( (end - begin)/2 );
      const { _row, _col } = _helper(middle);
      if ( matrix[_row][_col] === target ) {
          begin = middle; 
          end = middle;
      } else if ( matrix[_row][_col] > target ) {
          end = middle;
      } else {
          begin = middle;
      }
  }
  
  // result
  let res = false;
  [begin, end].map( item => {
      const { _row, _col } = _helper(item);
      // console.log( _row, _col );
      if ( matrix[_row][_col] === target ) {
          res = true;
      }
  });
  return res;
  
};

[[1,3,5,7],[10,11,16,20],[23,30,34,50]]
3
[[1,3,5,7],[10,11,16,20],[23,30,34,50]]
13
[[]]
13
[[12]]
12
[[12]]
13