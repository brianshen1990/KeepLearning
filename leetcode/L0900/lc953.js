/**
953. Verifying an Alien Dictionary

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.

 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const cache = {};
    order.split("").forEach( (item, index) => {
        cache[item] = index;
    });
    
    const compare = ( small, bigger ) => {
        let min = Math.min( small.length , bigger.length );
        for ( let i = 0 ; i < min ; i++ ) {
            if ( cache[small[i]] < cache[bigger[i]] ) return true;
            if ( cache[small[i]] > cache[bigger[i]] ) return false;
        }
        if ( small.length > bigger.length ) return false;
        return true;
    }
    
    for ( let i = 1 ; i < words.length ; i++ ) {
       if ( ! compare( words[i-1], words[i] )  ) return false;
    }
    return true;
};

/**
["hello","leetcode"]
"hlabcdefgijkmnopqrstuvwxyz"
["word","world","row"]
"worldabcefghijkmnpqstuvxyz"
["apple","app"]
"abcdefghijklmnopqrstuvwxyz"

*/