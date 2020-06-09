/**
279. Perfect Squares

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 */


/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {   
    
    // init 
    const seq = new Array(n+1).fill(Number.MAX_VALUE);
    seq[0] = 0;
    let k = 1;
    while ( true ) {
        let pow = Math.pow(k, 2);
        if ( pow <= n ) {
            seq[pow] = 1;
        }
        if ( pow >= n ) {
            break;
        }
        k++;
    }
    // console.log(seq);
    
    // go dp
    for ( let i = 1; i <= n ; i++ ) {
        if ( seq[i] === 1 ) {
            continue;
        }
        let min = i;
        for ( let j = 1 ; j < i ; j++ ) {
            min = Math.min( min, seq[j] + seq[i-j] )   
        }
        seq[i] = min;
    }
    // console.log( seq );
    
    // res
    return seq[n];
};

/**
1
12
13
345
12312
 */