/**
155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.array = [];
    this.maxArray = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.array.push( x );
    if ( this.maxArray.length === 0 ) {
        this.maxArray = [x];
    } else {
        if ( x < this.maxArray[this.maxArray.length-1] ) {
            this.maxArray.push( x );
        } else {
            this.maxArray.push( this.maxArray[this.maxArray.length-1] );
        }
    }
    
    // console.log( this.array, this.maxArray );
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if ( this.array.length > 0 ) {
        this.array.pop();
        this.maxArray.pop();
    } else {
        // pass
    }
    // console.log( this.array, this.maxArray );
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if ( this.array.length > 0 ) {
        return this.array[this.array.length-1];
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if ( this.maxArray.length > 0 ) {
        return this.maxArray[this.maxArray.length-1];
    } else {
      return null;  
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/**

["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

 */