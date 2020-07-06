/**
368. Largest Divisible Subset

Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

Si % Sj = 0 or Sj % Si = 0.

If there are multiple solutions, return any subset is fine.

Example 1:

Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)
Example 2:

Input: [1,2,4,8]
Output: [1,2,4,8]

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if ( nums.length <= 1 ) {
        return nums;
    }
    
    nums = nums.sort( (a,b) => a-b );
    
    const seq = new Array(nums);
    for ( let i = 0 ; i < nums.length ; i++ ) {
        seq[i] = {
            val: 1,
            list: [nums[i]]
        }
    }
    
    for ( let i = 1 ; i < nums.length ; i++ ) {
        let max = 1;
        let index = i;
        for ( let j = 0 ; j < i ; j++ ) {
            if ( nums[i] % nums[j] === 0 && seq[j].val + 1 > max ) {
                max = seq[j].val + 1;
                index = j;
            }
        }
        if ( index !== i ) {
            seq[i].val = max;
            seq[i].list = [...seq[index].list ,nums[i] ];
        }
    }
    
    let maxIndex = 0;
    let maxSeq = seq[0].val;
    for ( let i = 1; i < nums.length; i++ ) {
        if ( seq[i].val > maxSeq ) {
            maxSeq = seq[i].val;
            maxIndex = i;
        }
    } 
    // console.log( seq );
    
    return seq[maxIndex].list;
};

/** 
[1,2,3]
[1,2,4,8]
[1]
[]
[1,2,8,4,16,5,7,25,3,9,18,36,72]
*/
