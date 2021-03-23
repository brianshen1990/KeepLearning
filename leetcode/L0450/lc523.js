/**

523. Continuous Subarray Sum

Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to a multiple of k, that is, sums up to n*k where n is also an integer.

 

Example 1:

Input: [23, 2, 4, 6, 7],  k=6
Output: True
Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
Example 2:

Input: [23, 2, 6, 4, 7],  k=6
Output: True
Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
 

Constraints:

The length of the array won't exceed 10,000.
You may assume the sum of all the numbers is in the range of a signed 32-bit integer.

 */



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var checkSubarraySum = function(nums, k) {
    const cache = {0: -1};
    
    let sum = 0;
    for ( let i = 0 ; i < nums.length ; i++ ) {
        sum += nums[i];

        sum = ( (k!= 0) ? (sum % k) : sum );
        if ( sum in cache ) {
            if ( i > cache[sum] + 1 ) {
                return true;
            }
        } else {
            cache[sum] = i;
        }
    }
    return false;
};


/**
[23,2,4,6,7]
6
[23, 2, 6, 4, 7]
6
[6]
6
[23, 2, 6, 4, 7]
7
[3, 7]
7
[]
4
[0]
0
[23,2,6,4,7]
0
[23,2,6,4,7]
0
[23,2,6,4,7]
-1
[23,2,6,4,7]
-8
[23,2,6,4,7]
-9
 */