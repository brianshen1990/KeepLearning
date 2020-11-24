/**

491. Increasing Subsequences

Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2.

 

Example:

Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
 

Constraints:

The length of the given array will not exceed 15.
The range of integer in the given array is [-100,100].
The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    
    const cache = new Set();
    
    let ret = [];
    for ( let i = 0 ; i < nums.length ; i++ ) {
        let next = [];
        for ( let j = 0 ; j < ret.length ; j++ ) {
            if ( nums[i] >= ret[j][ret[j].length-1] ) {
                const str = `${ret[j].join("_")}_${nums[i]}`;
                if ( !cache.has(str) ) {
                    next.push([...ret[j], nums[i]]);
                    cache.add(str);
                }
            }
        }
        if ( !(`${nums[i]}` in cache) ) {
            cache.add( `${nums[i]}` );
            next.push([nums[i]]);
        }
        
        ret = ret.concat(next);
    }
    return ret.filter( item => item.length > 1 );
    
};


/**
[4]
[7,7]
[4,6]
[4,6,7,7]
[4,6,7,7,7]
[4,6,7,7,7,8,8,8,9,9,9]
 */