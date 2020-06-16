/**
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.

 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const cache = {};
    const already = {};
    
    let match = true;
    for ( let i = 0 ; i < s.length ; i++ ) {
        
        if ( cache[ s[i] ] ) {
            // console.log(s[i], "exist");
            if ( cache[ s[i] ] === t[i] ) {
                continue;
            } else {
                match = false;
                break;
            }
        } else {
            if ( already[ t[i] ] ) {
                match = false;
                break;
            }
            cache[ s[i] ] = t[i];
            already[ t[i] ] = true;
        }
    }
    // console.log( cache );
    return match;
};


/**
"egg"
"add"
"foo"
"bar"
"paper"
"title"
""
""
"q"
"q"
"q"
"a"
"ac"
"ca"
"ab"
"aa"
 */