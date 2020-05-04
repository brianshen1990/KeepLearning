/**
343. Integer Break

Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

Example 1:

Input: 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
Example 2:

Input: 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
Note: You may assume that n is not less than 2 and not larger than 58.

 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const seq = new Array(n+1).fill(0);
    seq[1] = 0;
    seq[2] = 1;
    for ( let i = 3 ; i <= n ; i++ ) {
        const stopPoint = Math.floor(i/2);
        let max = 0;
        for ( let j = 1; j <= stopPoint ; j++ ) {
            max = Math.max(max, 
                    Math.max(seq[j], j) * Math.max(seq[i-j], i-j));
        }
        seq[i] = max;
    }
    // console.log(seq);
    return seq[n];
};

/** 
2
3
4
10
45
58
*/