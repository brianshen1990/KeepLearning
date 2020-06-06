/**
211. Add and Search Word - Data structure design

Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.

 */

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.tire = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let tempTire = this.tire;
    for ( let j = 0; j < word.length ; j++ ) {
      tempTire[ word[j] ] = tempTire[ word[j] ] || {
          val: false, 
          arr: {}
      }
      tempTire[ word[j] ].val = true;
      if ( j === word.length - 1 ) {
          tempTire[ word[j] ].word = true;
      }
      tempTire = tempTire[ word[j] ].arr;
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const dfs = (_tire, word) => {        
        if ( word.length === 0 ) {
            return _tire.word;;
        }
        
        let nextTire = [];
        if ( word[0] === '.' ) {
            // add all
            nextTire = Object.keys( _tire.arr );
        } else {
            nextTire.push( word[0] )
        }
        for ( let i = 0; i < nextTire.length ; i++ ) {
            // console.log( _tire, nextTire[i] )
            if ( _tire.arr[nextTire[i]] ) {
                let temp = dfs(_tire.arr[nextTire[i]], word.substr(1));
                if (temp) {
                    return temp;
                    break;
                }
            }
        }
        return false;
    }
    
    // console.log( this.tire );
    return dfs( { arr: this.tire }, word );
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */



/**
["WordDictionary","addWord","addWord","addWord","search","search","search","search", "search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".aj"],["b.."], ["h"]]
["WordDictionary","addWord","addWord","addWord","search","search","search","search", "search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."], ["h"]]
["WordDictionary","addWord","addWord","addWord","search","search","search","search", "search", "addWord", "search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."], ["h"], ["h"], ["h"]]
 */