/**
78. Subsets

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ret = [[]];
    for( let i = 1; i<= nums.length ; i++ ) {
        combineHelper( nums, i ,[] , ret);
    }
    
    return ret;
};

/**
 * @param {number[]} allNum
 * @param {number} k
 * @param {number[]} base
 * @param {number[][]} ret
 * @return {void}
 */

var combineHelper = function( allNum ,k , base, ret ) {
    // console.log(allNum ,k , base, ret );
    // console has an effect
    if ( k < 1 ) {
        return;
    }
    if ( k === 1 ) {
        for( let i = 0; i< allNum.length ; i++ ) {
            ret.push( base.concat([allNum[i]]) );
        }
        return;
    }
    let len = allNum.length ;
    for ( let i = 0; i < len + 1 - k ; i++ ){
        let value = allNum[i];
        combineHelper(allNum.slice(i+1), k-1, base.concat([value]), ret);
    }
}