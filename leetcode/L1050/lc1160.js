/**
1160. Find Words That Can Be Formed by Characters
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
 */

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
    const arr = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    
    chars.split("").forEach( char => {
        arr[char.charCodeAt(0) - aCode]++;
    });
    
    
    let ret = 0;
    words.forEach( word => {
        const keepArr = [...arr];
        let ok = true;
        for ( let i = 0 ; i < word.length ; i++ ) {
            if ( keepArr[word[i].charCodeAt(0)-aCode] === 0 ) {
                ok = false;
                break;
            }
            keepArr[word[i].charCodeAt(0)-aCode]--;
        }
        if ( ok ) {
            ret += word.length;
        }
    })
    
    return ret;
};

/**
["cat","bt","hat","tree"]
"atach"
["hello","world","leetcode"]
"welldonehoneyr"
 */