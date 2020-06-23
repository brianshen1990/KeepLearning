/**
342. Power of Four

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false
Follow up: Could you solve it without loops/recursion?

 */


/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if ( num <= 0 ) {
        return false;
    }
    if ( num === 1 ) {
        return true;
    }
    const str = num.toString(2);
    // console.log(num, str, /^(00)*1(00)+$/.test(str));
    
    return /^(00)*1(00)+$/.test(str);
};


/** 
-2
0
1
4
16
64
65
*/