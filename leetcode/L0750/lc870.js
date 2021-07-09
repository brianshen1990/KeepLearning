/**
870. Advantage Shuffle

Given two arrays nums1 and nums2 of equal size, the advantage of nums1 with respect to nums2 is the number of indices i for which nums1[i] > nums2[i].

Return any permutation of nums1 that maximizes its advantage with respect to nums2.

 

Example 1:

Input: nums1 = [2,7,11,15], nums2 = [1,10,4,11]
Output: [2,11,7,15]
Example 2:

Input: nums1 = [12,24,8,32], nums2 = [13,25,32,11]
Output: [24,32,8,12]
 

Note:

1 <= nums1.length = nums2.length <= 10000
0 <= nums1[i] <= 109
0 <= nums2[i] <= 109
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var advantageCount = function(nums1, nums2) {
    
    nums2 = nums2.map( (item, index) => ({
        item, index
    })).sort( (a,b) => a.item - b.item);
    
    nums1.sort( (a,b) => a-b );
    nums1 = nums1.map( item => ({item, flag: false}) );
    // console.log( nums2, nums1 );
    
    let index1 = 0;
    let index2 = 0;
    let ret = new Array(nums1.length).fill(-1);
    
    while ( index2 < nums2.length && index1 < nums1.length ) {
        while ( index1 < nums1.length && 
               nums1[index1].item <= nums2[index2].item ) {
            index1++;
        }
        
        if ( index1 < nums1.length ) {
            ret[ nums2[index2].index ] = nums1[index1].item;
            nums1[index1].flag = true;
        }
        index2++;
        index1++;
    }
    
    let newIndex = 0;
    for ( let i = 0 ; i < nums1.length ; i++ ) {
        if ( ! nums1[i].flag ) {
            // fill any where
            newIndex = ret.indexOf(-1, newIndex);
            ret[newIndex] = nums1[i].item;
            newIndex += 1; 
        }
    }
    
    return ret;
};


/**
[2,7,11,15]
[1,10,4,11]
[12,24,8,32]
[13,25,32,11]
[1,2,3,4]
[5,6,7,8]
[1]
[2]
[2]
[1]
[1,2,3,4]
[2,3,4,2]
  */
