/**
290. Word Pattern

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let match = true;
    let pArr = pattern.split("");
    let sArr = str.split(" ");
    // console.log( pArr, sArr );
    if ( pArr.length !== sArr.length ) {
        return false;
    }
    
    let cache = {};
    let cacheR = {};
    
    for ( let i = 0 ; i < pArr.length ; i++ ) {
        if ( pArr[i] in cache ) {
            if ( cache[ pArr[i] ] === sArr[i] ) {
                continue;
            } else {
                match = false;
                break;
            }
        } else {
            if ( sArr[i] in cacheR ) {
                match = false;
                break;
            }
            cache [ pArr[i] ] = sArr[i];
            cacheR[ sArr[i] ] = pArr[i];
        }
    }
    return match;
};


/**
"abba"
"dog cat cat dog"
"abba"
"dog cat cat fish"
"aaaa"
"dog cat cat dog"
"abba"
"dog dog dog dog"
"abb"
"dog dog dog"
"dog dog dog"
 */