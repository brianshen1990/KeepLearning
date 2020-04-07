/**
59. Spiral Matrix II

Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]


 */



/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n === 0) {
        return [];
    }
    if( n === 1) {
        return [[1]];
    }
    
    let ret = new Array(n);
    for( let i = 0; i < n; i++ ) {
        ret[i] = new Array(n).fill(0);
    }
    let level = 0;
    let tempBegin = 1;
    while( 2 * level < n ) {
        if( (2 * level + 1) === n ) {
            // last odd
            ret[level][level] = tempBegin;
            break;
        } else {
            // 4 number every time
            for ( let i = level ; i < n - level - 1 ; i++ ) {
                let singleLen =  n - 1 - level * 2;
                let newBegin = tempBegin + i - level;
                ret[level][i] = newBegin ;
                ret[i][n-1-level] = newBegin + singleLen ;
                ret[n-1-level][n-1-i] = newBegin + singleLen * 2;
                ret[n-1-i][level] = newBegin + singleLen * 3;
            }
            // console.log(ret);
        }
        tempBegin = tempBegin +  ( n - 1 - level*2 ) * 4;
        level++;
    }
    return ret; 
};


const Array2 = function (matrix){
    console.log('[');
    for( let i = 0; i< matrix.length ; i++  ){
      console.log(`  ${matrix[i]}`)
    }
    console.log(']');
  }

  
console.log(Array2(generateMatrix(0)));
console.log(Array2(generateMatrix(1)));
console.log(Array2(generateMatrix(2)));
console.log(Array2(generateMatrix(3)));
console.log(Array2(generateMatrix(4)));
console.log(Array2(generateMatrix(5)));
console.log(Array2(generateMatrix(6)));