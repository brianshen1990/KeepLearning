/**

1248. Count Number of Nice Subarrays


Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

 

Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There is no odd numbers in the array.
Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16
 

Constraints:

1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    
    const helper = ( arr, max ) => { // at most
        let ret = 0; 
        let beg = 0 ;
        for ( let end = 0 ; end < arr.length ; end++ ) {
            if ( arr[end] % 2 === 1 ) max--;
            while ( max < 0 ) {
                if ( arr[beg] % 2 === 1 ) {
                    max++;
                }
                beg++;
            }
            ret += end - beg;
        }
        return ret;
    }
    return helper( nums, k ) - helper( nums, k-1 );
    
};


/**
[1,1,2,1,1]
3
[2,4,6]
1
[2,2,2,1,2,2,1,2,2,2]
2
[2,2,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,2,2]
2
 */