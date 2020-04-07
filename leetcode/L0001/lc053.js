/**
53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // if new sum < 0, just restart
  if( nums.length === 0 ) {
    return 0;
  }
  let retMax = nums[0];
  let tempMax = nums[0];
  for( let i = 1; i < nums.length ; i++ ){
    if( tempMax < 0 ) {
      tempMax = 0;
    }
    tempMax = tempMax + nums[i];
    if ( tempMax > retMax ) {
      retMax = tempMax;
    }
  }
  return retMax;
};

console.log( maxSubArray( [-2,1,-3,4,-1,2,1,-5,4] ) === 6 );
console.log( maxSubArray( [] ) === 0 );