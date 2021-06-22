/**
680. Valid Palindrome II

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
 */


/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    let len = s.length;
    let flag = false;
    for ( let i = 0 ; i < len ; i++ ) {
        if ( i > len -1 - i ) break;
        if ( s[i] === s[len-1-i] ) {
            continue;
        }
        let delFirst = s.substr(0, i) + s.substr(i+1);
        // console.log("delelet first", delFirst);
        if ( delFirst === delFirst.split("").reverse().join("") ) return true;
        let delLast = s.substr(0, len-1-i) + s.substr(len-i);
        // console.log("delelet last", delLast);
        if ( delLast === delLast.split("").reverse().join("") ) return true;
        return false;
    }
    return true;
};


/**
"aba"
"abca"
"abc"
"a"
"aa"
"abbca"
"absbca"
"acbba"
"acbwerba"
"abcba"
"abcb"
"bcba"
"acbdba"
*/