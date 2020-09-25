/**
1081. Smallest Subsequence of Distinct Characters

Return the lexicographically smallest subsequence of text that contains all the distinct characters of text exactly once.

Example 1:

Input: "cdadabcc"
Output: "adbc"
Example 2:

Input: "abcd"
Output: "abcd"
Example 3:

Input: "ecbacba"
Output: "eacb"
Example 4:

Input: "leetcode"
Output: "letcod"
 

Constraints:

1 <= text.length <= 1000
text consists of lowercase English letters.
Note: This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/

*/


/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
    const cache = {};
    text.split("").forEach( (item, index) => {
        cache[item] = cache[item] || [];
        cache[item].push(index);
    });
    
    const chars = "abcdefghijklmnopqrstuvwxyz".split("");
    let ret = "";
    
    while ( Object.keys(cache).length > 0 ) {
        let found = null;
        for ( let i = 0 ; i < chars.length ; i++ ) {
            const tryChar = chars[i];
            if ( tryChar in cache ) {
                // see if we can choose the most smallest 1
                let ok = true;
                const smallestIndex = cache[tryChar][0]; 
                for ( let j = 0 ; j < chars.length ; j++ ) {
                    const otherChar = chars[j];
                    if ( otherChar !== tryChar && otherChar in cache ) {
                        if ( cache[otherChar][ cache[otherChar].length-1  ] <= smallestIndex ) {
                            ok = false;
                            break;
                        }
                    }
                }
                
                if ( ok ) {
                    found = tryChar;
                    delete cache[tryChar];
                    Object.keys(cache).forEach( item => {
                        while ( cache[item][0] < smallestIndex ) {
                            cache[item].shift();
                        }
                    });
                    break;
                }
            }
        }
        ret += found;
    }
    return ret;
    
};


/**
"cdadabcc"
"cdaabcc"
"abcd"
"ecbacba"
"leetcode"
"a"
 */