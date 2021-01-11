/**

560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const cache = {0:1};
    let ret = 0;
    let sum = 0;
    for ( let i = 0 ; i < nums.length ; i++ ) {
        sum += nums[i];
        if ( ( sum - k ) in cache ) {
            ret += cache[sum-k];
        }
        cache[sum] = cache[sum] || 0;
        cache[sum]++;
    }
    return ret;

};

var subarraySum2 = function(nums, k) {
    // 2 pointer, No, because it could be miuns
    const arr = [0];
    let sum = 0;
    for ( let i = 0 ; i < nums.length ; i++ ) {
        sum += nums[i];
        arr.push(sum);
    }
    
    let ret = 0;
    for ( let i = 1 ; i <= nums.length ; i++ ) {
        for ( let j = 0 ; j < i ; j++ ) {
            if ( arr[i] - arr[j] === k ) {
                ret++;
            }
        }
    }
    return ret;
};

/**
[1,1,1]
2
[1,2,3]
3
[3,2,1]
3
[3]
3
 */