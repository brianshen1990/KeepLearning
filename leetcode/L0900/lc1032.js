/**
1032. Stream of Characters

Implement the StreamChecker class as follows:

StreamChecker(words): Constructor, init the data structure with the given words.
query(letter): returns true if and only if for some k >= 1, the last k characters queried (in order from oldest to newest, including this letter just queried) spell one of the words in the given list.
 

Example:

StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
streamChecker.query('a');          // return false
streamChecker.query('b');          // return false
streamChecker.query('c');          // return false
streamChecker.query('d');          // return true, because 'cd' is in the wordlist
streamChecker.query('e');          // return false
streamChecker.query('f');          // return true, because 'f' is in the wordlist
streamChecker.query('g');          // return false
streamChecker.query('h');          // return false
streamChecker.query('i');          // return false
streamChecker.query('j');          // return false
streamChecker.query('k');          // return false
streamChecker.query('l');          // return true, because 'kl' is in the wordlist
 

Note:

1 <= words.length <= 2000
1 <= words[i].length <= 2000
Words will only consist of lowercase English letters.
Queries will only consist of lowercase English letters.
The number of queries is at most 40000.
 */


/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
    const tire = {}
    words.map( item => {
        let node = tire;
        for ( let i = 0 ; i < item.length ; i++ ) {
            const char = item[i];
            node[char] = node[char] || { word: false, tire: {} }
            if ( i === item.length-1 ) {
                node[char].word = true;
            }
            node = node[char].tire
        }
    });
    // console.log( tire );
    this.tire = tire;
    this.pointers = new Set([tire]);
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    let next = new Set([this.tire]);
    let found = false;
    for ( let item of this.pointers  ) {
        if ( letter in item ) {
            next.add( item[letter].tire );
            if ( item[letter].word === true ) {
                found = true;
            }
        }
    };
    this.pointers = next;
    return found;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

/*
["StreamChecker","query","query","query","query","query","query","query","query","query","query","query","query"]
[[["cd","f","kl"]],["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"],["k"],["l"]]
 */