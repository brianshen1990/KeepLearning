/**
326. Power of Three

Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
 */


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if ( n <= 0 ) {
        return false;
    }
    
    let ret = true;
    while( n > 1 ) {
        let rem = n % 3;
        if (rem !== 0) {
            ret = false;
            break;
        }
        n = n / 3;
    }
    
    return ret;
};

/** 
0
1
2
4
5
8
9
27
9
45
-3
-9
-27
*/