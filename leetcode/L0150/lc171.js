/**
172. Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity.

 */


/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // looking for numbers end with 5, 0
    let ret = 0;
    while ( n >= 5 ) {
        let _remain = Math.floor( n / 5 )
        ret += _remain;
        n = _remain;
    }
    return ret;
};


/**
0
3
5
25
100
93024112
 */