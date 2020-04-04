/**
58. Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0; 
    for( let i = s.length -1 ; i>= 0;i--  ) {
        if( s[i] === ' ' ){
            if(len > 0) {
                break;
            }
        } else {
            len++;
        }
    }
    return len;
};

console.log( lengthOfLastWord('Hello World') === 5 );
console.log( lengthOfLastWord('Hello World ') === 5 );
console.log( lengthOfLastWord('Hello World    ') === 5 );
console.log( lengthOfLastWord('Hello') === 5 );
console.log( lengthOfLastWord('  Hello') === 5 );
console.log( lengthOfLastWord('  ') === 0 );
console.log( lengthOfLastWord('') === 0 );
console.log( lengthOfLastWord('  h ') === 1 );