/**
318. Maximum Product of Word Lengths

Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:

Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16 
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4 
Explanation: The two words can be "ab", "cd".
Example 3:

Input: ["a","aa","aaa","aaaa"]
Output: 0 
Explanation: No such pair of words.
 */


/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
        
    const base = 'a'.charCodeAt(0);
    const helperTurnToBit = (word) => {
        let ret = new Array(26).fill(0);
        for ( let i = 0 ; i < word.length ; i++ ) {
            ret[ word[i].charCodeAt(0) - base ] = 1;  
        }
        return ret.join("");
    }
    let bitWords = new Array(words.length);
    for ( let i = 0 ; i < words.length ; i++ ) {
        bitWords[i] = helperTurnToBit( words[i] );
    }
    // console.log( bitWords );
    bitWords = bitWords.map( item => parseInt(item, 2) );
    // console.log( bitWords );
    
    let ret = 0;
    for ( let i = 0 ; i < bitWords.length ; i++ ) {
        for ( let j = i+1 ; j < bitWords.length ; j++ ) {
            // console.log( bitWords[i], bitWords[j], bitWords[i] & bitWords[j] );
            let temp = bitWords[i] & bitWords[j];
            if ( temp == 0 ) {
                // console.log("hit");
                // no collapse
                ret = Math.max(ret, words[i].length * words[j].length );
            }
        }
    }
    
    return ret;
    
};


/** 
["abcw","baz","foo","bar","xtfn","abcdef"]
["a","ab","abc","d","cd","bcd","abcd"]
["a","aa","aaa","aaaa"]
*/