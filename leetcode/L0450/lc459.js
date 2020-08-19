/**

459. Repeated Substring Pattern

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 
Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if ( s.length === 0 ) {
        return false;
    }
    
    const isPrime = (n) => {
        if ( n <= 2 ) {
            return true;
        }
        const max = Math.ceil( Math.sqrt(n) );
        for ( let i = 2 ; i <= max ; i++ ) {
            if ( n % i === 0 ) {
                return false;
            }
        }
        return true;
    }

    for ( let i = 2; i <= s.length ; i++ ) {
        if ( s.length % i === 0 && isPrime(i) ) {
            // console.log("hit", i)
            const sub = s.substr(0, s.length / i);
            if ( new Array(i).fill(sub).join("") === s ) {
                return true;
            }
        }
    }
    return false;
    // return (s+s).substr(1, s.length*2-2).indexOf(s) !== -1;
};


/**
"abab"
"aba"
"abcabcabcabc"
"ababab"
"bb"
"b"
"bbb"
"abacababacab"
 */