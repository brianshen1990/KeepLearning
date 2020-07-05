/**
115. Distinct Subsequences

Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

It's guaranteed the answer fits on a 32-bit signed integer.

Example 1:

Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
Example 2:

Input: S = "babgbag", T = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {

    let res = 0;
    const cache = {};
    
    const helper = ( lStr, sStr ) => {
        if ( lStr.length < sStr.length ) {
            return 0;
        }
        if ( lStr.length === sStr.length ) {
            return lStr === sStr ? 1 : 0;
        }
        if ( `${lStr}_${sStr}` in cache ) {
            return cache[ `${lStr}_${sStr}` ];
        }
        
        let ret = 0;
        for ( let i = 0 ; i <= lStr.length - sStr.length ; i++ ) {
            if ( lStr[i] === sStr[0] ) {
                ret += helper( lStr.substr(i+1), sStr.substr(1) );   
            }
        } 
        cache[ `${lStr}_${sStr}` ] = ret;
        return ret;
    }
    return helper(s, t);
};


/**
 * 
"rabbbit"
"rabbit"
"babgbag"
"bag"
"bab"
"bag"
"bag"
"babgbag"
 */