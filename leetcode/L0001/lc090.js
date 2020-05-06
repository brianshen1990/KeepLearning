/**
90. Subsets II

Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const ret = [];
  nums = nums.sort( (a, b) => a - b);
  // console.log(nums)
  
  const helper = (_ret, _nums, _path, _index) => {
      _ret.push([..._path]);
      
      for ( let i = _index ; i < _nums.length ; i++ ) {
          if ( i !== _index && _nums[i] === _nums[i-1] ) {
              // only handle the fist occurance
              continue;
          }
          _path.push(_nums[i]);
          helper(_ret, _nums, _path, i+1);
          _path.pop();
      }
  }
  
  helper(ret, nums, [], 0);
  return ret;
};

/**
[1,2,2]
[]
[1]
[1,1]
[1,2,2,2,2,3,3,3,3,3,3]
[4,4,4,1,4]
 */

