/**

567. Permutation in String

Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False
 

Constraints:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].

 */



/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if ( s1.length > s2.length ) {
        return false;
    }
    const s1Mapping = new Array(26).fill(0);
    const s2Mapping = new Array(26).fill(0);
    
    const aNum = 'a'.charCodeAt(0);
    
    for ( let i = 0 ; i < s1.length ; i++ ) {
        s1Mapping[ s1[i].charCodeAt(0) - aNum ] += 1;
        s2Mapping[ s2[i].charCodeAt(0) - aNum ] += 1;
    }
    
    const diff =  s2.length - s1.length;
    for ( let i = 0; i <= diff ; i++ ) {
        if ( i !== 0 ) {
            s2Mapping[ s2[i-1].charCodeAt(0) - aNum ] -= 1;
            s2Mapping[ s2[i-1+s1.length].charCodeAt(0) - aNum ] += 1;
        }
        if ( s1Mapping.join(",") === s2Mapping.join(",") ) {
            return true;
        }
    }
    return false;
};



/**
"ab"
"eidbaooo"
"ibd"
"eidbaooo"
"ibod"
"eidbaooo"
"ibod"
"iobd"
"ibod"
"iob"
"eidbaooo"
"eidabooo"
"a"
"b"
"a"
"a"
 */