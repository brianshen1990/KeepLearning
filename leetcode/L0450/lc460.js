/**

460. LFU Cache

Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency), the least recently used key would be evicted.

Note that the number of times an item is used is the number of calls to the get and put functions for that item since it was inserted. This number is set to zero when the item is removed.

 

Follow up:
Could you do both operations in O(1) time complexity?

 

Example:

LFUCache cache = new LFUCache( 2  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

 */



/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.timesHeaderHash = {};
  this.existHash = {};
  this.capacity = capacity;
  this.full = 0;
  
  this.header = new BNode(Number.MAX_VALUE, Number.MAX_VALUE, 0);
  this.tailer = new BNode(-Number.MAX_VALUE, -Number.MAX_VALUE, 0);
  this.header.next = this.tailer;
  this.tailer.prev = this.header;
};

const BNode  = function(key, val, times, next, prev) {
  this.key = key;
  this.val = val;
  this.times = times;
  this.next = next;
  this.prev = prev;
}

/** 
* @param {number} key
* @return {number}
*/
LFUCache.prototype.get = function(key) {
  if ( this.existHash[key] ) {
      const tempNode = this.existHash[key];
      const times = ++tempNode.times;
      // if this node self is a times header
      if ( times > 1 &&  this.timesHeaderHash[times-1] ===  tempNode) {
        if ( tempNode.next.times !== times-1 ) {
          delete this.timesHeaderHash[times-1];  // lucky
        } else {
          this.timesHeaderHash[times-1] = tempNode.next;
        }
      }

      if ( this.timesHeaderHash[times] ) {
          const timesHeader = this.timesHeaderHash[times];
          if ( timesHeader !== tempNode ) {
              // swap header
              tempNode.prev.next = tempNode.next;  
              tempNode.next.prev = tempNode.prev;  // delete current from list

              timesHeader.prev.next = tempNode;  // insert to header
              tempNode.prev = timesHeader.prev;
              tempNode.next = timesHeader;
              timesHeader.prev = tempNode;

              this.timesHeaderHash[times] = tempNode;
          }
      } else {
          this.timesHeaderHash[times] = tempNode;
          
          const next = this.timesHeaderHash[times-1];
          if (next) {
            const before = next.prev;
            tempNode.prev.next = tempNode.next;  
            tempNode.next.prev = tempNode.prev;  // delete current from list
            next.prev = tempNode;
            tempNode.next = next;
            before.next = tempNode;
            tempNode.prev = before;
          }
      }
      
      // console.log( this.existHash );
      // console.log( this.timesHeaderHash );
      
      return tempNode.val;
  } else {
      return -1;
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LFUCache.prototype.put = function(key, value) {
  if ( this.capacity === 0 ) {
    return;
  }
  if ( this.existHash[key] ) {
      // already exists, so only update
      this.existHash[key].val = value;
      this.get(key);
  } else {
      const temp  = new BNode(key, value, 0);
      if (this.full < this.capacity) {
          // just insert
          this.tailer.prev.next = temp;
          temp.prev = this.tailer.prev;
          this.tailer.prev = temp;
          temp.next = this.tailer;
          
          this.existHash[key] = temp;
          this.get(key);
          this.full++;
      } else {
          // should delete
          const delNode = this.tailer.prev;
          delete this.existHash[delNode.key];
          if ( this.timesHeaderHash[delNode.times] === delNode ) {
              delete this.timesHeaderHash[delNode.times];
          }
          
          delNode.prev.next = temp;
          temp.prev = delNode.prev;
          
          this.tailer.prev = temp;
          temp.next = this.tailer;
          this.existHash[key] = temp;
          this.get(key);
      }
  }
};

/** 
* Your LFUCache object will be instantiated and called as such:
* var obj = new LFUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/


/**
["LFUCache","put","put","get","put","get","get","put","get","get","get"]
[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]
["LFUCache","put","get"]
[[0],[0,0],[0]]
["LFUCache","put","get","put","get","get"]
[[1],[2,1],[2],[3,2],[2],[3]]
 */


// const cache = new LFUCache( 2 /* capacity */ );
// cache.put(1, 1);
// cache.put(2, 2);
// console.log( cache.get(1) );       // returns 1
// cache.put(3, 3);    // evicts key 2
// console.log( cache.get(2) ) ;       // returns -1 (not found)
// console.log( cache.get(3) );       // returns 3.
// cache.put(4, 4);    // evicts key 1.
// console.log( cache.get(1) );       // returns -1 (not found)
// console.log( cache.get(3) );       // returns 3
// console.log( cache.get(4) );       // returns 4

// const cache = new LFUCache( 1 /* capacity */ );
// cache.put(2, 1);
// console.log( cache.get(2) );       // returns 1
// cache.put(3, 2);    // evicts key 2
// console.log( cache.get(2) ) ;       // returns -1 (not found)
// console.log( cache.get(3) );       // returns 2.
