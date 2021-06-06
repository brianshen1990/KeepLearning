/**

720. Longest Word in Dictionary

Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

 

Example 1:

Input: words = ["w","wo","wor","worl","world"]
Output: "world"
Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:

Input: words = ["a","banana","app","appl","ap","apply","apple"]
Output: "apple"
Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
 

Constraints:

1 <= words.length <= 1000
1 <= words[i].length <= 30
words[i] consists of lowercase English letters.
 */

/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWord = function(words) {
    const cache = {};
    words.forEach( word => {
        cache[word.length] = cache[word.length] || [];
        cache[word.length].push( word );
    })
    
    let index = 1;
    // let keepSet;
    let cacheSet = new Set();
    while ( index in cache ) {
        // keepSet = cacheSet;
        
        let nextSet;
        if ( index === 1 ) {
            nextSet = new Set( cache[1] || [] );
        } else {
            nextSet = new Set();
            cache[index].forEach( word => {
                if ( cacheSet.has( word.substr(0, word.length - 1) ) ) {
                    nextSet.add(word);
                }
            })
        }
        
        if ( nextSet.size === 0 ) {
            break;
        }
        
        cacheSet = nextSet;
        index++;
        
    }
    if ( cacheSet.size === 0 ) return "";
    return [...cacheSet].sort( (a,b) => a < b ? -1 : 1 )[0];
    
};


/**
["w","wo","wor","worl","world"]
["a","banana","app","appl","ap","apply","apple"]
["ab"]
["a", "abc"]
["a", "abc", "abcd"]
["ab", "abc"]
["a", "ab", "abc", "abd","aba"]
["a", "u", "ab", "uv", "abc", "uvw"]
["a", "u", "ab", "uv", "abc"]
["a", "u", "ab", "uv", "uvw"]
 */