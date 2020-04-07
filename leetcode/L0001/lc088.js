/**
88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index2 = n-1;
    let index1 = m-1;
    let indexT = m + n -1;
    while( index1 >= 0 && index2 >=0 ) {
        if( nums1[index1] >= nums2[index2] ) {
            nums1[indexT] = nums1[index1];
            index1--;
        } else {
            nums1[indexT] = nums2[index2]; 
            index2--;
        }
        indexT--;
    }
    if ( index2 >= 0 ) {
        while( index2 >=0 ) {
            nums1[indexT] = nums2[index2];
            index2--;
            indexT--;
        } 
    }    
};

/**
[0]
0
[0]
0
[0]
0
[1]
1
[1,2,3,0,0,0]
3
[2,5,6]
3
[1,2,3,0,0,0]
3
[]
0
[1,2,3,0,0,0]
3
[4,5,6]
3
[4,5,6,0,0,0]
3
[1,2,3]
3
 */
