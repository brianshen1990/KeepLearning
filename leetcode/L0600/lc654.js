/**
645. Set Mismatch

The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const cache = {};
  let dup = -1;
  nums.forEach( item => {
      cache[item] = cache[item] || 0;
      cache[item] += 1;
      if ( cache[ item ] === 2 ) {
          dup = item;
      }
  });
  let miss = -1;
  for ( let i = 0 ; i < nums.length ; i++ ) {
      if ( !( (i+1) in cache ) ) {
          miss = i+1;
          break;
      }
  }
  return [dup, miss];
};

/**
[1,2,2,4]
[1,1]
[1,2,3,4,2,5,8,7]
*/