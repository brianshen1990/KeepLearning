/**

47. Permutations II
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = [];
  if( nums.length === 0 ) {
    return res;
  }
  let mapping = [];
  permuteHelper2( nums, 0, nums.length, mapping);

  // Object.keys( mapping ).map( item => {
  //   res.push( item.split('_') );
  // });
  return mapping;
};

var swap = function(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
var permuteHelper2 = function(nums, begin, end, mapping ) {
  if (begin >= end-1 ) {
    mapping.push(nums.slice(0));
    return;
  }
  const tempNums = nums.slice(0, begin).concat(
      nums.slice( begin, end ).sort( (a,b) => a-b ) );
  let i = begin;
  while ( i < end ) {
    swap(tempNums, begin, i);
    permuteHelper2( tempNums, begin + 1, end, mapping );
    swap(tempNums, begin, i);
    // find who is the next, to skip same number
    let j = i;
    while( j < end && tempNums[j] === tempNums[i] ) {
      j++;
    }
    i = j;
  }
}



console.log( permuteUnique( [ 1 ] ).length === 1 ); 
console.log( permuteUnique( [ 1,2 ] ).length === 2 ); 
console.log( permuteUnique( [ 1,1,1 ] ).length === 1 ); 
console.log( permuteUnique( [ 1,1,2 ] ).length === 3 ); 
console.log( permuteUnique( [ 1,1,1,2 ] ).length === 4 ); 
console.log( permuteUnique( [ 1,1,1,2,5 ] ).length === 20 ); 
console.log( permuteUnique( [ 1,5,1,2,1 ] ).length === 20 ); 

console.log( permuteUnique( [ 1,5,1,2,1,1 ] ).length === 30 ); 
// console.log( permuteUnique( [ 1,5,1,2,1,1,1 ] ).length === 40 ); 
console.log( permuteUnique( [ 1,1,1,2,5,1,1,1,1 ] ).length === 72 ); 
const temp = new Array(1000);
temp.fill(1);
temp[0] = 2;
console.log( permuteUnique( temp ).length === 1000 ); 
