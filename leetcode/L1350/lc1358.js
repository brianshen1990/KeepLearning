/**
1358. Number of Substrings Containing All Three Characters

Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
Example 3:

Input: s = "abc"
Output: 1
 

Constraints:

3 <= s.length <= 5 x 10^4
s only consists of a, b or c characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    
    let ret = 0;
    
    const cache = {"a":0, "b":0, "c":0}
    let beg = 0;
    let end = 0;
    
    while ( end < s.length && beg < s.length-1 ) {
        if ( cache[ s[end] ] === 0 ) {
            cache[ s[end] ]++;
            if ( cache.a > 0 && cache.b > 0 && cache.c > 0 ) {
                // console.log("hit end", end)
                while ( cache.a > 0 && cache.b > 0 && cache.c > 0 ) {
                    cache[ s[beg] ]--; 
                    beg++;
                    ret += s.length - end;
                }
            }
            end++;
        } else {
            cache[ s[end] ]++;
            end++;
        }
    }
    
    return ret;
};

/**
"abcabc"
"abcabcabcabc"
"abcabcabcabcabcabcabcabc"
"aaacb"
"aaacbaaacbaaacbaaacbaaacbaaacbaaacbaaacb"
"abc"
"aba"
 */