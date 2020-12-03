/**

472. Concatenated Words

Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example:
Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
Note:
The number of elements of the given array will not exceed 10,000
The length sum of elements in the given array will not exceed 600,000.
All the input string will only include lower case letters.
The returned elements order does not matter.

 */


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    
    const trie = {};
    const addToTrie = (node, str, index) => {
        if ( index >= str.length ) return;
        if ( !(str[index] in node) ) {
            node[str[index]] = {
                word: false,
                next: {}
            };
        } 
        if ( index === str.length-1 ) {
            node[str[index]].word = true;
        }
        addToTrie( node[str[index]].next, str, index+1 );
    }
    
    words.forEach( item => {
        addToTrie(trie, item, 0);        
    });
    
    const dfs = (word, len) => {
        let node = trie;
        for ( let i = 0 ; i < word.length ; i++ ) {
            if ( word[i] in node ) {
                if ( node[word[i]].word ) {
                    if ( i === word.length-1 ) {
                        return len >= 1
                    } else {
                        const res = dfs(word.substr(i+1), len+1);
                        if (res) return true;
                    }
                    
                }
                node = node[word[i]].next;
            } else {
                break;
            }
        }
        return false;
    }
    
    return words.filter( item => dfs(item, 0) );
    
};

/**
["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
["cat","cats","dog","rat"]
["cat","cats","dog","rat","catscats"]
[]
["cat"]
 */