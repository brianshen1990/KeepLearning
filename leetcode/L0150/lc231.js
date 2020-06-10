/**
231. Power of Two

Given an integer, write a function to determine if it is a power of two.

Example 1:

Input: 1
Output: true 
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false
 */





/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let str = n.toString(2);
    if ( str[0] !== "1" ) {
        return false;
    }
    str = str.substr(1);
    return str.indexOf("1") >= 0 ? false : true;
};



/**
16
1
218
-4
0
 */