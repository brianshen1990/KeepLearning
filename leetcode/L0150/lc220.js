/**
220. Contains Duplicate III

Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let found = false;
    for ( let i = 0 ; i < nums.length - 1 ; i++ ) {
        const maxLen = Math.min( nums.length-1, i+k );
        const minLen = Math.max(0, i-k);
        for ( let j = minLen ; j <= maxLen ; j++ ) {
            if ( j === i ) {
                continue;
            }
            if ( Math.abs(nums[j] - nums[i]) <= t ) {
                console.log("found", nums[j], nums[i], j, i)
                found = true;
                break;
            }
        }
        if ( found ) {
            break;
        }
    }
    return found;
    
};

/**
[1,2,3,1]
3
0
[1,0,1,1]
1
2
[1,5,9,1,5,9]
2
3
[2,1]
1
1
*/