/**
264. Ugly Number II

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:  

1 is typically treated as an ugly number.
n does not exceed 1690.
 */


/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    // init 
    const seq = new Array(n).fill(0);
    seq[0] = 1;
    const baseUgly = {
        2: 0,
        3: 0, 
        5: 0
    };
    
    // go dp
    for ( let i = 1 ; i < n ; i++ ) {
        seq[i] = Math.min( seq[baseUgly[2]] * 2, 
                            seq[baseUgly[3]] * 3, 
                            seq[baseUgly[5]] * 5 );
        // adjust 
        while( seq[baseUgly[2]] * 2 <= seq[i] ) {
            // console.log("hit2")
            baseUgly[2] = baseUgly[2]+1;
        }
        while( seq[baseUgly[3]] * 3 <= seq[i] ) {
            // console.log("hit3")
            baseUgly[3] = baseUgly[3]+1;
        }
        while( seq[baseUgly[5]] * 5 <= seq[i] ) {
            // console.log("hit5")
            baseUgly[5] = baseUgly[5]+1;
        }
        // console.log( baseUgly, seq[i] )
    }
    // console.log( seq );
    
    return seq[n-1];
    
};

/**
1
2
10
169
1690
 */