/**

1577. Number of Ways Where Square of Number Is Equal to Product of Two Numbers

Given two arrays of integers nums1 and nums2, return the number of triplets formed (type 1 and type 2) under the following rules:

Type 1: Triplet (i, j, k) if nums1[i]2 == nums2[j] * nums2[k] where 0 <= i < nums1.length and 0 <= j < k < nums2.length.
Type 2: Triplet (i, j, k) if nums2[i]2 == nums1[j] * nums1[k] where 0 <= i < nums2.length and 0 <= j < k < nums1.length.
 

Example 1:

Input: nums1 = [7,4], nums2 = [5,2,8,9]
Output: 1
Explanation: Type 1: (1,1,2), nums1[1]^2 = nums2[1] * nums2[2]. (4^2 = 2 * 8). 
Example 2:

Input: nums1 = [1,1], nums2 = [1,1,1]
Output: 9
Explanation: All Triplets are valid, because 1^2 = 1 * 1.
Type 1: (0,0,1), (0,0,2), (0,1,2), (1,0,1), (1,0,2), (1,1,2).  nums1[i]^2 = nums2[j] * nums2[k].
Type 2: (0,0,1), (1,0,1), (2,0,1). nums2[i]^2 = nums1[j] * nums1[k].
Example 3:

Input: nums1 = [7,7,8,3], nums2 = [1,2,9,7]
Output: 2
Explanation: There are 2 valid triplets.
Type 1: (3,0,2).  nums1[3]^2 = nums2[0] * nums2[2].
Type 2: (3,0,1).  nums2[3]^2 = nums1[0] * nums1[1].
Example 4:

Input: nums1 = [4,7,9,11,23], nums2 = [3,5,1024,12,18]
Output: 0
Explanation: There are no valid triplets.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
1 <= nums1[i], nums2[i] <= 10^5

 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function(nums1, nums2) {
    // build cache
    const cache1 = {};
    nums1.forEach( item => {
       cache1[item] = cache1[item] || 0;
       cache1[item]++; 
    });
    const cache2 = {};
    nums2.forEach( item => {
       cache2[item] = cache2[item] || 0;
       cache2[item]++; 
    });
    
    // console.log( cache1, cache2 )
    
    nums1 = Object.keys( cache1 );
    nums2 = Object.keys( cache2 );
    let ret = 0;
    nums1.map( item => {
        item = parseInt(item);
        const square = Math.pow(item, 2);
        nums2.map( item2 => {
            item2 = parseInt( item2 );
            if ( square % item2 === 0 && item2 <= item ) {
                const div = square/item2;
                if ( div in cache2 ) {
                    if ( div === item2 ) {
                        ret += cache1[item] * ( cache2[div] * (cache2[div]-1) / 2 );
                    } else {
                        ret += cache1[item] * ( cache2[item2] * cache2[div] );
                    }
                }
            }
        });
    });
    // console.log("after1", ret)
    
    nums2.map( item => {
        item = parseInt(item);
        const square = Math.pow(item, 2);
        nums1.map( item1 => {
            item1 = parseInt(item1);
            if ( square % item1 === 0 && item1 <= item) {
                const div = square/item1;
                if ( div in cache1 ) {
                    if ( div === item1 ) {
                        ret += cache2[item] * ( cache1[div] * (cache1[div]-1) / 2);
                    } else {
                        ret += cache2[item] * ( cache1[item1] * cache1[div] );
                    }
                }
            }
        });
    })
    
    return ret;
};

/**
[7,4]
[5,2,8,9]
[1,1]
[1,1,1]
[7,7,8,3]
[1,2,9,7]
[4,7,9,11,23]
[3,5,1024,12,18]
 */