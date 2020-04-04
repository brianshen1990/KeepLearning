/**

54. Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

 */


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  if (cols === 0) {
    return [];
  }
  let ret = [];
  let tempRow = 0;
  while (tempRow * 2 < rows) {
    let i = 0;
    if (tempRow * 2 === rows - 1) {
      // last odd row
      for (i = tempRow; i < cols - tempRow; i++) {
        ret.push(matrix[tempRow][i]);
      }
      break;
      // } else if( tempRow*2 === rows-2 ) {
      //     // last even row, SAME 
    } else {
      // normal row
      // right
      for (i = tempRow; i < cols - tempRow; i++) {
        ret.push(matrix[tempRow][i]);
      }
      // down
      for (i = tempRow + 1; i < rows - 1 - tempRow; i++) {
        ret.push(matrix[i][cols - 1 - tempRow]);
      }
      // left
      for (i = cols - 1 - tempRow; i >= tempRow; i--) {
        ret.push(matrix[rows - 1 - tempRow][i]);
      }
      // up remove duplicated
      if (cols - 1 - tempRow !== tempRow) {
        for (i = rows - 2 - tempRow; i > tempRow; i--) {
          ret.push(matrix[i][tempRow]);
        }
        // last tow cols
        if (cols - 1 - tempRow === tempRow + 1) {
          break;
        }
      } else {
        // if single cols
        break;
      }
    }
    tempRow++;
  }
  return ret;
};