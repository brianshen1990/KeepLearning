/**
336. Palindrome Pairs

Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:

Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]] 
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
Example 2:

Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]] 
Explanation: The palindromes are ["battab","tabbat"]
 */


/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const map = {};
    words.forEach( (item, index) => {
        map[item] = index; 
    });
    
    const cache = {};
    const helperIsPar = (str) => {
        if ( str in cache ) {
            return cache[str];
        }
        cache[str] = ( str.split("").reverse().join("") === str );
        return cache[str];
    }
    
    const res = new Set();
    words.forEach( (item, index) => {
        
        // left
        const reverse = item.split("").reverse().join("");
        for ( let i = 0 ; i <= item.length ; i++ ) {
            const patch = reverse.substr(i); 
            if ( helperIsPar( item + patch) && patch in map && map[patch] !== index ) {
                res.add( `${index}_${map[patch]}` );
            }
        }
        
        // right
        for ( let i = item.length ; i >= 0 ; i-- ) {
            const patch = reverse.substr(0, i); 
            if ( helperIsPar( patch + item ) && patch in map && map[patch] !== index ) {
                res.add( `${map[patch]}_${index}` );
            }
        }
    });
    
    return [...res].map( item => item.split("_") );
    
};


/** 
["abcd","dcba","lls","s","sssll"]
["bat","tab","cat"]
["bat"]
[]
["bat","tab"]
["a",""]
*/