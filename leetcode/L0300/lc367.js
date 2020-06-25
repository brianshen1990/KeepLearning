/**
367. Valid Perfect Square

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Example 2:

Input: num = 14
Output: false
 

Constraints:

1 <= num <= 2^31 - 1

 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let beg = 1;
    let end = num;
    
    while ( beg + 1 < end ) {
        let middle = Math.ceil( (beg + end) / 2 );
        let res = middle * middle;
        if ( res === num ) {
            return true;
        } else if ( res > num ) {
            end = middle;
        } else {
            beg = middle;
        }
    }
    
    if ( beg * beg === num  || end * end === num ) {
        return true;
    } 
    return false;
    
};

/** 
1
2
3
4
16
14
255
34
123124124
*/
