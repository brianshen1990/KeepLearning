/**
51. N-Queens

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if( n === 0 ) {
    return [];
  }
  if( n === 1  ) {
    return [['Q']];
  }
  let rowMapping = {};
  let colMapping = {};
  let topRMapping = {}; // 
  let bottomRMapping = {}; // 
  let res = [];
  let tempArray = [];

  // i means the first row's col position
  rowMapping[0] = 1;
  for( let i = 0; i < n ; i++ ) {
    putNth(0, i, n, rowMapping, colMapping, topRMapping, bottomRMapping, tempArray, res);
  }
  return res;
};
var turnToQ = function(n, arr){
  let ret = [];
  for( let i = 0 ; i < n ; i++ ){
    ret.push( new Array(n).fill('.') );
  }
  for( let j = 0; j< arr.length ; j++ ){
    ret[ arr[j][0] ][arr[j][1] ] = 'Q';
  }
  for( let k = 0; k < n; k++ ) {
    ret[k] = ret[k].join('');
  }
  return ret;
}
var putNth = function(row, col, len, 
    rowMapping, colMapping, topRMapping, bottomRMapping, tempArray, res) {
  if( topRMapping[row+col] || bottomRMapping[row-col] ) {
    return false;
  } else {
    rowMapping[row] = 1;
    colMapping[col] = 1;
    topRMapping[row+col] = 1;
    bottomRMapping[row-col] = 1;
    tempArray.push( [row, col] );
    if( tempArray.length === len  ) {
      // find one
      res.push( turnToQ(len, tempArray) );
    } else {
      // next row
      for( let j = 0; j < len ; j++ ) {
        if( !colMapping[j] ) {
          putNth(row + 1, j, len, 
            rowMapping, colMapping, topRMapping, bottomRMapping, tempArray, res  )
        }
      }
    }
    tempArray.pop();
    rowMapping[row] = 0;
    colMapping[col] = 0;
    topRMapping[row+col] = 0;
    bottomRMapping[row-col] = 0;
  }
  

}

console.log( solveNQueens(0) );
console.log( solveNQueens(1) );
console.log( solveNQueens(2) );
console.log( solveNQueens(3) );
console.log( solveNQueens(4) );
console.log( solveNQueens(5) );

