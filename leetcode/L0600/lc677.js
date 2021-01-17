/**
677. Map Sum Pairs

Implement the MapSum class:

MapSum() Initializes the MapSum object.
void insert(String key, int val) Inserts the key-val pair into the map. If the key already existed, the original key-value pair will be overridden to the new one.
int sum(string prefix) Returns the sum of all the pairs' value whose key starts with the prefix.
 

Example 1:

Input
["MapSum", "insert", "sum", "insert", "sum"]
[[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
Output
[null, null, 3, null, 5]

Explanation
MapSum mapSum = new MapSum();
mapSum.insert("apple", 3);  
mapSum.sum("ap");           // return 3 (apple = 3)
mapSum.insert("app", 2);    
mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)
 

Constraints:

1 <= key.length, prefix.length <= 50
key and prefix consist of only lowercase English letters.
1 <= val <= 1000
At most 50 calls will be made to insert and sum.

 */


 /**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.trie = { next: {} };
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {

    let node = this.trie.next;
    let diff = 0;
    let arr = [];
    
    for ( let i = 0 ; i < key.length ; i++ ) {
        if ( i === key.length-1 ) {
            if ( key[i] in node  ) {
                node[key[i]].word = true;
                node[key[i]].sum += val - node[key[i]].val;
                diff = val - node[key[i]].val;
                node[key[i]].val = val;
            } else {
                node[key[i]] = { word: true, val, sum: val, next: {} };
                diff = val;
            }
        } else {
            if ( !(key[i] in node) ) {
                node[key[i]] = { word: false, val: 0, sum: 0, next:{} };
            }
            arr.push( node[key[i]] );
            node = node[key[i]].next;
        }
    }
    for ( let i = 0 ; i < arr.length ; i++ ) {
        arr[i].sum += diff;
    }
    // console.log( JSON.stringify(this.trie.next) );
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let node = this.trie.next;
    let found = null;
    let index = 0;
    while ( index < prefix.length ) {
        if ( prefix[index] in node ) {
            found = node[prefix[index]];
            node = node[prefix[index]].next;
            index++;
            // console.log(node);
        } else {
            return 0;
        }
    }
    return found.sum;
    
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */



/**
["MapSum", "insert", "sum", "insert", "sum"]
[[], ["apple",3], ["ap"], ["app",2], ["ap"]]
["MapSum", "sum", "insert", "sum"]
[[], ["ap"], ["app",2], ["ap"]]
["MapSum", "insert", "sum", "insert", "sum", "insert", "sum"]
[[], ["apple",3], ["ap"], ["app",2], ["ap"], ["a", 10], ["a"]]
["MapSum", "insert", "sum", "insert", "sum", "insert", "sum", "insert", "sum", "sum", "sum"]
[[], ["apple",3], ["ap"], ["app",2], ["ap"], ["a", 10], ["a"], ["appos", 10], ["app"], ["appo"], ["ap"]]
["MapSum", "insert", "sum", "insert", "sum", "insert", "sum", "insert", "sum", "sum", "sum", "sum"]
[[], ["apple",3], ["ap"], ["app",2], ["ap"], ["a", 10], ["a"], ["appos", 10], ["app"], ["appo"], ["ap"], ["application"]]
["MapSum", "insert", "sum", "insert", "sum", "insert", "sum", "insert", "sum"]
[[], ["apple",3], ["ap"], ["app",2], ["ap"], ["a", 10], ["a"], ["app",20], ["a"]]
*/