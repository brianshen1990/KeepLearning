/**
242. Valid Anagram

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if ( s.length !== t.length ) {
        return false;
    }
    
    const cache1 = new Array(26).fill(0);
    const cache2 = new Array(26).fill(0);
    
    const base = 'a'.charCodeAt(0);
    for ( let i = 0 ; i < s.length ; i++ ) {
        cache1[ s[i].charCodeAt(0) - base ]++;
    }
    for ( let i = 0 ; i < t.length ; i++ ) {
        cache2[ t[i].charCodeAt(0) - base ]++;
    }
    
    let ret = true;
    for ( let i = 0 ; i < cache1.length ; i++ ) {
        if ( cache1[i] !== cache2[i] ) {
            ret = false;
            break;
        }
    }
    return ret;

};

/**
"anagram"
"nagaram"
"rat"
"car"
""
""
""
"as"
 */