/**
349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.

 */



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const ret = [];
    nums1 = [ ... new Set(nums1.sort( (a,b) => a -b )) ];
    nums2 = [ ... new Set(nums2.sort( (a,b) => a -b )) ];
    
    // console.log(nums1, nums2);
    
    let index1 = 0, index2 = 0;
    while ( index1 < nums1.length && index2 < nums2.length ) {
        if ( nums1[index1] === nums2[index2] ) {
            ret.push( nums1[index1] );
            index1++;
            index2++
        } else if ( nums1[index1] < nums2[index2] ) {
            index1++;
        } else {
            index2++;
        }
    }
    
    return ret;
};


/**

[1,2,2,1]
[2,2]
[4,9,5]
[9,4,9,8,4]
[]
[]
[]
[1]

 */