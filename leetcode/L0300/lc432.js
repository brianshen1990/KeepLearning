/**

432. All O`one Data Structure


Implement a data structure supporting the following operations:

Inc(Key) - Inserts a new key with value 1. Or increments an existing key by 1. Key is guaranteed to be a non-empty string.
Dec(Key) - If Key's value is 1, remove it from the data structure. Otherwise decrements an existing key by 1. If the key does not exist, this function does nothing. Key is guaranteed to be a non-empty string.
GetMaxKey() - Returns one of the keys with maximal value. If no element exists, return an empty string "".
GetMinKey() - Returns one of the keys with minimal value. If no element exists, return an empty string "".
Challenge: Perform all these in O(1) time complexity.

 */




function Node(val, count, prev, next ) {
    this.val = val;
    this.count = count;
    this.prev = null;
    this.next = null;
}


/**
 * Initialize your data structure here.
 */
var AllOne = function() {
    this.cache = {}; // {key: { count, prev, next } }
    this.dummyHead = new Node(Number.MAX_VALUE, Number.MAX_VALUE);
    this.dummyEnd = this.dummyHead;
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    
    let node = null;
    if ( key in this.cache ) {
        this.cache[key].count++;
        node = this.cache[key];
    } else {
        node = new Node(key, 1);
        this.cache[key] = node;
        this.dummyEnd.next = node;
        node.prev = this.dummyEnd;
        this.dummyEnd = node;
    }
    
    // prev
    while ( node.count > node.prev.count ) {
        // swap
        const nodeNext = node.next;
        const nodePrev = node.prev;
        const nodePrevPrev = node.prev.prev; // exist, as there is a dummy
        
        nodePrev.next = nodeNext;
        if ( nodeNext ) {
            nodeNext.prev = nodePrev;
        } else {
            this.dummyEnd = nodePrev;
        }
        
        nodePrevPrev.next = node;
        node.prev = nodePrevPrev;

        node.next = nodePrev;
        nodePrev.prev = node;
    }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if ( key in this.cache ) {
        const node = this.cache[key];
        let count = node.count;
        if ( count === 1 ) {
            if ( this.dummyEnd === node ) {
                // just delete this
                node.prev.next = null;
                this.dummyEnd = node.prev;
            } else {
                // delete and clean
                const nodeNext = node.next;
                const nodePrev = node.prev;
                
                nodePrev.next = nodeNext;
                nodeNext.prev = nodePrev;    
            }
            delete this.cache[key]
        } else {
            node.count--;
            if ( this.dummyEnd !== node ) {
                // move behind
                while ( node.next && node.count < node.next.count ) {
                     // swap
                    const nodeNext = node.next;
                    const nodePrev = node.prev;
                    const nodeNextNext = node.next.next

                    nodePrev.next = nodeNext;
                    nodeNext.prev = nodePrev;
                    
                    if ( nodeNextNext ) {
                        nodeNextNext.prev = node;
                    } else {
                        this.dummyEnd = node;
                    }
                    node.next = nodeNextNext;

                    node.prev = nodeNext;
                    nodeNext.next = node;
                }
            }
        }
    }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    if ( this.dummyHead.next ) {
        return this.dummyHead.next.val;
    } else {
        return "";
    }
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    if ( this.dummyEnd !== this.dummyHead ) {
        return this.dummyEnd.val;
    } else {
        return "";
    }
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */



/**
["AllOne","getMaxKey","getMinKey"]
[[],[],[]]
["AllOne","inc", "getMaxKey","getMinKey"]
[[],["1"],[],[]]
["AllOne","inc", "getMaxKey","getMinKey"]
[[],["1"],[],[]]
["AllOne","inc","inc", "getMaxKey","getMinKey"]
[[],["1"], ["1"], [],[]]
["AllOne","inc","inc", "getMaxKey","getMinKey"]
[[],["1"], ["2"], [],[]]
["AllOne","inc","dec", "getMaxKey","getMinKey"]
[[],["1"], ["2"], [],[]]
["AllOne","inc","dec","dec", "getMaxKey","getMinKey"]
[[],["1"], ["2"],["1"], [],[]]
["AllOne","inc","inc","inc", "getMaxKey","getMinKey"]
[[],["1"], ["2"],["1"], [],[]]
["AllOne","inc","inc","inc","inc","inc","inc","dec", "dec","getMinKey","dec","getMaxKey","getMinKey"]
[[],["a"],["b"],["b"],["c"],["c"],["c"],["b"],["b"],[],["a"],[],[]]
["AllOne","inc","inc","inc","inc","inc","inc","getMaxKey","inc","dec","getMaxKey","dec","inc","getMaxKey","inc","inc","dec","dec","dec","dec","getMaxKey","inc","inc","inc","inc","inc","inc","getMaxKey","getMinKey"]
[[],["hello"],["world"],["leet"],["code"],["DS"],["leet"],[],["DS"],["leet"],[],["DS"],["hello"],[],["hello"],["hello"],["world"],["leet"],["code"],["DS"],[],["new"],["new"],["new"],["new"],["new"],["new"],[],[]]
 */

var obj = new AllOne()
obj.inc("hello")
obj.inc("world")
obj.inc("leet")
obj.inc("code")
obj.inc("DS")
obj.inc("leet")
console.log( obj.getMaxKey() )

obj.inc("DS")
obj.dec("leet")
console.log( obj.getMaxKey() )

obj.dec("DS")
obj.inc("hello")
console.log( obj.getMaxKey() )
obj.inc("hello")
obj.inc("hello")
obj.dec("world")
obj.dec("leet")
obj.dec("code")
obj.dec("DS")
console.log( obj.getMaxKey() )
obj.inc("new")
obj.inc("new")
obj.inc("new")
obj.inc("new")
obj.inc("new")
obj.inc("new")
console.log( obj.getMaxKey() )
console.log(  obj.getMinKey() )