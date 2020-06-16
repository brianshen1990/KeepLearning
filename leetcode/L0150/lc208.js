/**
208. Implement Trie (Prefix Tree)

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

 */

/**
 * Initialize your data structure here.
 */
var Trie = function() {    
    this.root = {};
    // root -> [{word: true, next: [numm*26] }, null, null]    
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let arr= word.split("");
    let root = this.root;
    for ( let i = 0 ; i < arr.length ; i++ ) {
        let char = arr[i];
        if ( ! root[char] ) {
            root[char] = {
                word: false,
                next: {}
            }
        }
        if ( i === arr.length - 1 ) {
            // last one
            root[char].word = true;
        }
        root = root[char].next;
    }
    // console.log(this.root);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let arr = word.split("");
    // console.log( arr );
    let root = this.root;
    let found = false;
    
    let i = 0;
    while ( root && i < arr.length ) {
        let char = arr[i];
        if ( char in root) {
            if ( i === arr.length-1 ) {
                // console.log("end!", root)
                found = root[char].word;
                break;
            }
            // console.log("next", char, root[char]);
            root = root[ char ].next;
            i++;
        } else {
            // console.log("not exist", char, root);
            break;
        }
    }
    return found;
    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let arr = prefix.split("");
    // console.log( arr );
    let root = this.root;
    let found = true;

    let i = 0;
    while ( root && i < arr.length ) {
        let char = arr[i];
        if ( char in root) {
            // console.log("next", char, root[char]);
            root = root[ char ].next;
            i++;
        } else {
            found = false;
            break;
        }
    }
    return found;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


/**
["Trie","insert","search"]
[[],["apple"],["apple"]]
["Trie","insert","search"]
[[],["a"],["a"]]
["Trie","insert","search","search","startsWith","insert","search"]
[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
["Trie","insert","search","search","startsWith","insert","search","search"]
[[],["apple"],["apple"],["app"],["app"],["app"],["app"], ["apple"]]
["Trie","insert","insert","search"]
[[],["apple"],["bhss"],["apple"]]
 */