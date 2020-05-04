/**
85. Maximal Rectangle

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example:

Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6

 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if ( !(matrix.length > 0 && matrix[0].length > 0 )) {
        return 0;
    }
    
    // pre handle 
    for ( let i = 0; i < matrix.length ; i++ ) {
        for ( let j = 0; j < matrix[0].length ; j++ ) {
            matrix[i][j] = matrix[i][j] === '0' ? 0 : 1;            
        }
    }
    //  pre handle  compress col 
    for ( let i = 1; i < matrix.length ; i++ ) {
        for ( let j = 0 ; j < matrix[0].length ; j++ ) {
            if (matrix[i][j] === 1) {
                matrix[i][j] = matrix[i-1][j] + 1;
            }
        }
    }
    // console.log(matrix);
    
    // init and helper 
    const seq = new Array(matrix.length).fill(0);
    const _helperHistogram = (_seq) => {
        // init 
        const leftArr = new Array(_seq.length).fill(-1);
        const rightArr = new Array(_seq.length).fill(-1);
        
        leftArr[0] = 0;
        for ( let i = 1; i < _seq.length ; i++ ) {
            let j = i;
            while ( j >= 0 && _seq[j] !==0 && _seq[j] >= _seq[i] ) {
                j--;
            }
            leftArr[i] = j+1;
        }
        
        rightArr[0] = _seq.length;
        for ( let i = _seq.length-1; i >= 0 ; i-- ) {
            let j = i;
            while ( j < _seq.length  && _seq[j] !==0 && _seq[j] >= _seq[i] ) {
                j++;
            }
            rightArr[i] = j-1;
        }
        // console.log(leftArr, rightArr ); 
        
        // go DP
        let ret = 0;
        for ( let i = 0; i < _seq.length ; i++ ) {
            if (_seq[i] !== 0 ) {
                ret = Math.max(ret, _seq[i] *(rightArr[i]-leftArr[i]+1) )
            }
        }
        // res
        return ret;
    }
    
    // go DP 
    for ( let i = 0; i < matrix.length ; i++ ) {
        seq[i] = _helperHistogram(matrix[i]);
    }
    console.log(seq);
    
    // result 
    return Math.max(...seq);    
};

/**
[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
[[]]
[["1","0","1","1","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","1","1","0"]]
 */