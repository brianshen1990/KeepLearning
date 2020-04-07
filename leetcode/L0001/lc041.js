/**

41. First Missing Positive

Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
  Input: [1,2,0]
  Output: 3

Example 2:
  Input: [3,4,-1,1]
  Output: 2

Example 3:
  Input: [7,8,9,11,12]
  Output: 1

Note:
  Your algorithm should run in O(n) time and uses constant extra space.

 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if( nums.length <= 0 ) {
    return 1;
  }
  for ( let i = 0; i < nums.length ; i++ ) {
    if( nums[i] > 0 ) {
      if( nums[i] > nums.length ) {
        // ignore, because it's not this num
      } else if( nums[i] === i+1 ) {
        // ignore , correct position
      } else {
        // adjust position
        let current = nums[i];
        let next = nums[current-1];
        nums[current-1] = current;
        while( next > 0 && next <=  nums.length && next !== nums[next-1]  ) {
          // ignore o or minus, ignore bigger data, ignore correct position
          // continue adjust
          current = next;
          next = nums[current-1];
          nums[current-1] = current;
        }
      }
    } else {
      // ignore
    }
  }

  let missing = 0;
  ////  [3,4,3,4]
  for( let  i = 0; i<nums.length ; i++ ) {
    if ( nums[i] !== i+1 ) {
      missing = i+1;
      break;
    }
  }
  if( missing === 0 ) {
    missing = nums.length + 1;
  }
  return missing;
};


console.log( firstMissingPositive([1,2,0]) );
// 3

console.log( firstMissingPositive([3,4,-1,1]) );
// 2

console.log( firstMissingPositive([7,8,9,11,12]) );
// 1

console.log( firstMissingPositive([7,-8,9,11,12]) );
// 1