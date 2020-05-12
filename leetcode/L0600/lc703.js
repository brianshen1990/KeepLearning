/**
703. Kth Largest Element in a Stream

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
Note:
You may assume that nums' length ≥ k-1 and k ≥ 1.

 */


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    const arr = nums.sort( (a, b) => b-a );
    this.nums = arr;
    this.k = k;
    while ( this.nums.length > this.k ) {
        this.nums.pop();
    }
    // console.log( this.nums, this.k );
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if ( this.nums.length >= this.k && val <= this.nums[this.k-1] ) {
        return this.nums[this.k-1];
    }
    
    // init 
    let beg = 0;
    let end = Math.min( this.k - 1, this.nums.length - 1 );
    let middle = -1;
    
    // recursive 
    // find first <= val
    while ( beg + 1 < end ) {
        middle = beg + Math.floor( (end - beg) / 2 );
        if ( this.nums[middle] === val ) {
            beg = middle;
            end = middle;
        } else if ( this.nums[middle] < val ) {
            end = middle;
        } else {
            beg = middle;
        }   
    }
    
    // result
    let pos = 0;
    if (this.nums.length > 0) {
        if ( this.nums[beg] <= val ) {
            pos = beg;
        } else if ( this.nums[end] <= val ){
            pos = end;
        } else {
            pos = end + 1;
        }
    }
    // console.log(pos, this.nums);
    this.nums.splice(pos, 0, val);
    // console.log(pos, this.nums);
    
    // handle special
    if ( this.nums.length < this.k ) {
        return undefined;
    } else {
        if ( this.nums.length > this.k ) {
            this.nums.pop();
        }
        return this.nums[this.k - 1]
    }
    
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


/**
["KthLargest","add","add","add","add","add"]
[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]
["KthLargest","add","add","add","add","add"]
[[1,[4,5,8,2]],[3],[5],[10],[9],[4]]
["KthLargest","add","add","add","add","add"]
[[1,[]],[-3],[-2],[-4],[0],[4]]
["KthLargest","add","add","add","add","add"]
[[3,[-1,-2]],[-3],[-2],[-4],[0],[4]]
*/