/**
1763. Longest Nice Substring

A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

 

Example 1:

Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.
Example 2:

Input: s = "Bb"
Output: "Bb"
Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
Example 3:

Input: s = "c"
Output: ""
Explanation: There are no nice substrings.
Example 4:

Input: s = "dDzeE"
Output: "dD"
Explanation: Both "dD" and "eE" are the longest nice substrings.
As there are multiple longest nice substrings, return "dD" since it occurs earlier.
 

Constraints:

1 <= s.length <= 100
s consists of uppercase and lowercase English letters.

*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(s) {
    const aCharCode = 'a'.charCodeAt(0);
    const ACharCode = 'A'.charCodeAt(0);

    const helper = (str) => {
        // console.log("----->", str);
        
        const arrLower = {};
        const arrUpper = {};
        
        for ( let i = 0 ; i < str.length ; i++ ) {
            if ( str[i] >= 'a' && str[i] <= 'z' ) {
                arrLower[str[i]] = true;
            } else {
                arrUpper[str[i]] = true;
            }
        }
        
        let separatorSet = new Set();
        Object.keys( arrLower ).forEach( item => {
            if ( !( item.toUpperCase() in arrUpper )) {
                separatorSet.add( item ) 
            }
        })
        Object.keys( arrUpper ).forEach( item => {
            if ( !( item.toLowerCase() in arrLower )) {
                separatorSet.add( item ) 
            }
        })
        // console.log( str, separatorSet );
        if ( separatorSet.size === 0) {
            return str;
        }
        if ( separatorSet.size === str.length-1 ) {
            return "";
        }
        
        let separator = [];
        for ( let i = 0 ; i < str.length ; i++ ) {
            if ( separatorSet.has(str[i]) ) {
                separator.push(i);
            }
        }
        
        // console.log( str, separator );
        
        let ret = "";
        let temp = helper(str.substring(0,separator[0]));
        if ( temp.length > ret.length) ret = temp;
        
        for ( let i = 1 ; i < separator.length ; i++ ) {
            temp = helper(str.substring(separator[i-1]+1, separator[i]));
            if ( temp.length > ret.length) ret = temp;
        }
        
        temp = helper(str.substring(separator[separator.length-1]+1));
        if ( temp.length > ret.length) ret = temp;
        
        return ret;
        
    } 
    
    return helper(s);
};


/* 
"YazaAay"
"Bb"
"c"
"dDzeE"
"YazaAaydDzeEYazaAaydDzeE"
"YazbBbyAaA"
"YazbBbyAaAa"
"nN"
"FeOZJEnNfjz"
*/