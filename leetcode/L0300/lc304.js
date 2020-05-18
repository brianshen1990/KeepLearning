/**
304. Range Sum Query 2D - Immutable

Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Range Sum Query 2D
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
Note:
You may assume that the matrix does not change.
There are many calls to sumRegion function.
You may assume that row1 ≤ row2 and col1 ≤ col2.

 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    
  if (matrix && matrix.length > 0 && matrix[0].length > 0) {
      // pass
  } else {
      this.empty = true;
      return;
  }
  this.empty = false;
  const dpMatrix = [];
  for ( let i = 0 ; i <= matrix.length ; i++) {
      const temp = [];
      for (let j = 0; j <= matrix[0].length ; j++) {
          temp.push(0);
      }
      dpMatrix.push(temp);
  }
  
  // init , state = sum[i][j]
  let temp = 0;
  for ( let i = 0 ; i < matrix[0].length ; i++) {
      temp += matrix[0][i];
      dpMatrix[1][i+1] = temp;
  }
  temp = matrix[0][0];
  for ( let i = 1; i < matrix.length ; i++ ) {
      temp += matrix[i][0];
      dpMatrix[i+1][1] = temp;
  }
  console.log( dpMatrix );
  
  // go dp
  for ( let i = 1; i < matrix.length ; i++ ) {
      for ( let j = 1; j < matrix[0].length ; j++ ) {
          const temp = dpMatrix[i+1][j] + matrix[i][j] +
                  ( dpMatrix[i][j+1] -dpMatrix[i][j] );
          dpMatrix[i+1][j+1] = temp;
      }
  }
  // console.log( dpMatrix );    
  this.dpMatrix = dpMatrix;
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (this.empty) {
      return 0;
  }
  let res = this.dpMatrix[row2+1][col2+1];
  if ( col1 > 0  && row1 > 0) {
      res = res - this.dpMatrix[row2+1][col1];
      res = res - this.dpMatrix[row1][col2+1];
      res = res + this.dpMatrix[row1][col1];
  } else if ( row1 > 0 ) {
      // col1 = 0
      res = res - this.dpMatrix[row1][col2+1];
  } else if ( col1 > 0 ) {
      // row1 = 0
      res = res - this.dpMatrix[row2+1][col1];
  } 
  return res;
};

/** 
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/


/**
["NumMatrix","sumRegion","sumRegion","sumRegion","sumRegion","sumRegion"]
[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4],[1,1,1,1], [2,2,2,2]]
["NumMatrix","sumRegion","sumRegion"]
[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[1,1,1,4], [1,1,4,1]]
["NumMatrix"]
[[[]]]
 */