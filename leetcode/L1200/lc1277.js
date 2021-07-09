/**

1277. Count Square Submatrices with All Ones

Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

Example 1:

Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.
Example 2:

Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.
 

Constraints:

1 <= arr.length <= 300
1 <= arr[0].length <= 300
0 <= arr[i][j] <= 1


 */


/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var countSquares = function(matrix) {
    let ret =  0;
    let M = matrix.length;
    let N = matrix[0].length;
    
    for ( let i = 0 ; i < M ; i++ ) {
        for ( let j = 0 ; j < N ; j++ ) {
            let temp = 0;
            if ( matrix[i][j] === 1 ) {
                temp++;
                let row = i; 
                let col = j;
                let scale = 1;
                while ( row + scale < M && col + scale < N ) {
                    let flag = true;
                    for ( let  k = 0 ;  k <= scale ; k++ ) {
                        if ( matrix[row+scale][col+k] === 0 ) {
                            flag = false;
                            break;
                        }
                        if ( matrix[row+k][col+scale] === 0 ) {
                            flag = false;
                            break;
                        }
                    }
                    if ( !flag ) break;
                    temp++;
                    scale++;
                }
            }
            // if ( temp > 0 ) console.log(`${i}_${j}`, temp);
            ret += temp;
        }
    }
    
    return ret;
};


/**
[[0,1,1,1],[1,1,1,1],[0,1,1,1]]
[[1,0,1],[1,1,0],[1,1,0]]
 */