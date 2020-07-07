/**
387. First Unique Character in a String


Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase English letters.

 */


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const cache = {};
    
    for ( let i = 0 ; i < s.length ; i++ ) {
        cache[ s[i] ] = cache[ s[i] ] || 0;
        cache[ s[i] ]++;
    };
    
    for ( let i = 0 ; i < s.length; i++ ) {
        if ( cache[ s[i] ] === 1 ) {
            return i;
        }
    }
    return -1;
};


/** 
"leetcode"
"loveleetcode"
*/