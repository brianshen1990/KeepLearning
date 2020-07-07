/**
380. Insert Delete GetRandom O(1)

Design a data structure that supports all following operations in average O(1) time.

 

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
 

Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
 */


/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.hashPos = {};
    this.vals = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // console.log("insert", this.hashPos, this.vals, val)
    if ( val in this.hashPos ) {
        return false;
    }
    this.hashPos[val] = this.vals.length;
    this.vals.push( val );
    return true;  
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // console.log("remove", this.hashPos, this.vals, val, val in this.hashPos)
    if(! ( val in this.hashPos) ) {
        return false;
    }
    // swap with the last one
    const newPos = this.hashPos[val]; // maybe middle
    const replaceVal = this.vals[ this.vals.length-1 ];
    this.vals[ newPos ] = replaceVal;
    this.hashPos[ replaceVal ] = newPos;
    
    delete this.hashPos[val];
    this.vals.pop();
    
    return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    
    const index = Math.floor( Math.random() * this.vals.length );
    return this.vals[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */



/** 
["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
[[],[1],[2],[2],[],[1],[2],[]]
["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom", "remove", "insert"]
[[],[1],[2],[2],[],[1],[2],[], [2], [1]]
*/