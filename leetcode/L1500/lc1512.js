/**

1512. Number of Good Pairs

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const map = {};
  nums.forEach( item => {
      map[item] = map[item] || 0;
      map[item]++;
  })
  
  let ret = 0;
  Object.values( map ).forEach( item => {
      if ( item >= 2 ) {
          ret += item * (item - 1) / 2;
      }
  })
  return ret;
  
};


/**
[1,2,3,1,1,3]
[1,2,3,1,1,3,3,3,3,3,3,3,1,1,1,2,2,2,2,2]
[1,1,1,1]
[1,2,3]
 */