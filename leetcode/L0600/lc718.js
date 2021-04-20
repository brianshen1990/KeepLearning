/**

718. Maximum Length of Repeated Subarray

Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

 

Example 1:

Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].
Example 2:

Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 100

 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    
    const matrix = [];
    for ( let i = 0 ; i <= nums1.length ; i++ ) {
        matrix.push( new Array( nums2.length + 1 ).fill(0) );
    }
    
    let max = 0;
    for( let i = 1 ; i <= nums1.length ; i++ ) {

        for( let j = 1 ; j <= nums2.length ; j++ ) {
            if ( nums1[i-1] !== nums2[j-1] ) {
                matrix[i][j] = 0;
            } else {
                matrix[i][j] = matrix[i-1][j-1] + 1;
                if ( matrix[i][j] > max ) {
                    max = matrix[i][j];
                }
            }
        }
    }
    
    return max;
    
};

/*
[1,2,3,2,1]
[3,2,1,4,7]
[0,0,0,0,0]
[0,0,0,0,0]
[1,2,3,2,1]
[3,2,1,4,7,9,0,3,2,1,2]
[0]
[2]
*/