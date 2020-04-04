/**
55. Jump Game

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 0) {
      return false;
  }
  // cannot even jump an step 
  if( nums[0] === 0 && nums.length === 1 ) {
      return true;
  }
  if( nums[0] === 0 && nums.length > 1 ) {
      return false;
  }
  
  // greedy
  let begin = 0, end = nums[0];
  let countCircle = 1;
  while ( end < nums.length - 1 ) {
      console.log( begin, end );
      countCircle++;
      let tempEnd = end;
      let tempBegin = begin;
      for( let i = begin; i <= end ; i++ ) {
          // caculate the max end 
          if ( nums[i] > 0 ) {
             anyNonZero = true; 
          }
          // reach further
          if ( i + nums[i] >= tempEnd ) {
              tempEnd = i + nums[i];
          }
      }
      begin = end;
      if ( end === tempEnd ) {
          // cannot go further
          break;
      }
      end = tempEnd;
      
  }
  console.log(countCircle);
  if ( end < nums.length - 1 ) {
      return false;
  }
  return true;
};

console.log( canJump([7,6,5,4,3,2,1,0,1,2,3]) === false );
console.log( canJump([7,6,5,4,3,1,1,1,2,3]) === true );
console.log( canJump([0,6,5,4,3,1,1,1,2,3]) === false )
console.log( canJump([2,3,1,1,4]) === true )
console.log( canJump([0]) === true )
console.log( canJump([0,1]) === false )





