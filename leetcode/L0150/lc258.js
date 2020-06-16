/**
258. Add Digits

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
Follow up:
Could you do it without any loop/recursion in O(1) runtime?
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    let arr = `${num}`.split("").map( item => parseInt(item) );
    while ( arr.length > 1 ) {
        num = 0
        arr.map( item => num += item );
        arr = `${num}`.split("").map( item => parseInt(item) );
    }
    return num;
    
};

/**
38
0
1
123123
 */