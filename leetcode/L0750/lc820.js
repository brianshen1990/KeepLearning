/*
820. Short Encoding of Words

A valid encoding of an array of words is any reference string s and array of indices indices such that:

words.length == indices.length
The reference string s ends with the '#' character.
For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

 

Example 1:

Input: words = ["time", "me", "bell"]
Output: 10
Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
Example 2:

Input: words = ["t"]
Output: 2
Explanation: A valid encoding would be s = "t#" and indices = [0].

 

Constraints:

1 <= words.length <= 2000
1 <= words[i].length <= 7
words[i] consists of only lowercase letters.
*/


/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const trie = { next:{} }
    let ret = 0 ;
    
    words.forEach( item => {
        let node = trie;
        let chars = item.split("").reverse().join("");
        // console.log(chars);
        for ( let i = 0 ; i < chars.length ; i++ ) {
            if ( ! ( chars[i] in node.next ) ) {
                node.next[chars[i]] = { next: {}, word: false };
            }
            if ( node.next[chars[i]].word ) {
                node.next[chars[i]].word = false;
                ret -= i+2;
            }
            if ( i === chars.length-1 ) {
                if ( Object.keys( node.next[chars[i]].next ).length > 0 ) {
                    // nothing
                } else {
                    node.next[chars[i]].word = true;
                    ret +=  i+2;
                }
            }
            node = node.next[chars[i]];
        }
        // console.log( JSON.stringify(trie) )
    });
    
    return ret;
    
};


/*

["time", "me", "bell"]
["time", "me", "bell", "ll", "bell", "bell"]
["t"]
["me", "time"]
["me", "time", "time"]
["me", "time", "time", "m"]
["me", "time", "time", "ame"]
["p","grah","qwosp"]

*/
