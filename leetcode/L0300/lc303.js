/**
303. Range Sum Query - Immutable

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.

 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.retNums = [];
  let temp = 0;
  for ( let i = 0; i< nums.length ; i++ ) {
      temp += this.nums[i];
      this.retNums.push( temp );
  }
  console.log( this.retNums );
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
  if ( j < i ) {
      return 0;
  }
  if (i === j) {
      return this.nums[i];
  }
  return this.retNums[j] - ( i > 0 ? this.retNums[i-1] : 0 );
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(i,j)
*/


/**
["NumArray","sumRange","sumRange","sumRange"]
[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]
 */