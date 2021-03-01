/**
647. Palindromic Substrings

Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Note:

The input string length won't exceed 1000.

 */



/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    let ret = 0;
    for ( let i = 0 ; i < s.length ; i++) {
        // i Odd
        ret++;
        let len = 1;
        while ( i-len >= 0 && i+len < s.length && s[i-len] === s[i+len] ) {
            len++;
            ret++;
        }
        
        // i, i+1 Even
        if ( i+1 < s.length && s[i] === s[i+1] ) {
            ret++;
            len = 1;
            while ( i-len >= 0 && i+1+len < s.length && s[i-len] === s[i+1+len] ) {
                ret++;
                len++;
            }
        }
    }
    
    return ret;
};

/**
"abc"
"aaa"
"aaaabc"
"a"
"aaaabcaaaabcaaaabcaaaabcaaaabcaaaabcaaaabcaaaabcaaaabc"
""
*/