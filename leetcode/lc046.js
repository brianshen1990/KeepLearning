/**

46. Permutations
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  if( nums.length === 0 ) {
    return res;
  }
  permuteHelper( nums, 0, nums.length, res );
  return res;
};

var permuteHelper = function(nums, begin, end, res ) {
  if (begin === end-1 ) {
    res.push( nums.slice(0) );
    return;
  }
  for( let i = begin; i < end ; i++ ) {
    // swap 
    let swap = null;
    swap = nums[begin];
    nums[begin] = nums[i];
    nums[i] = swap;
    permuteHelper( nums, begin + 1, end, res );
    swap = nums[begin];
    nums[begin] = nums[i];
    nums[i] = swap;
  }
}

console.log( permute( [ 1 ] ).length === 1 ); 
console.log( permute( [ 1,2 ] ).length === 2 ); 
console.log( permute( [ 1,2,3 ] ).length === 3 * 2 ); 
console.log( permute( [ 1,2,3,4 ] ).length === 4 * 3 * 2 ); 
console.log( JSON.stringify( permute( [ 1,2,3,4 ]) ) );

console.log( permute( [ 1,2,3,4,5,6 ] ).length === 6 * 5 * 4 * 3 * 2 ); 