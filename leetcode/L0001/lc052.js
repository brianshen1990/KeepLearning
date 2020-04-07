/**
51. N-Queens

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
  if( n === 0 ) {
    return 0;
  }
  if( n === 1  ) {
    return 1;
  }
  let rowMapping = {};
  let colMapping = {};
  let topRMapping = {}; // 
  let bottomRMapping = {}; // 
  let res = { num:0 };
  let tempArray = [];

  // i means the first row's col position
  rowMapping[0] = 1;
  for( let i = 0; i < n ; i++ ) {
    putNth(0, i, n, rowMapping, colMapping, topRMapping, bottomRMapping, tempArray, res);
  }
  return res.num;
};

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
      res.num = res.num + 1;
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

console.log( totalNQueens(0) );
console.log( totalNQueens(1) );
console.log( totalNQueens(2) );
console.log( totalNQueens(3) );
console.log( totalNQueens(4) );
console.log( totalNQueens(5) );
