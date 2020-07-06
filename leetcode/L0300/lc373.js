/**
373. Find K Pairs with Smallest Sums

You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]] 
Explanation: The first 3 pairs are returned from the sequence: 
             [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [1,1],[1,1]
Explanation: The first 2 pairs are returned from the sequence: 
             [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
Example 3:

Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [1,3],[2,3]
Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

var kSmallestPairs = function(nums1, nums2, k) {
    
    let ret = [];
    let indexes = new Array( nums1.length ).fill(0);
    const end = Math.min( k, nums1.length * nums2.length );
    for ( let i = 0; i < end ; i++ ) {
        let index1 = -1;
        let index2 = -1;
        let min = Number.MAX_VALUE;
        let temp = indexes.map( (ind2, ind1) => {
            if ( ind2 < nums2.length && min > nums1[ind1] + nums2[ind2] ) {
                min = nums1[ind1] + nums2[ind2];
                index1 = ind1;
                index2 = ind2;
            }  
        });   
        indexes[index1]++;
        ret.push( [ nums1[index1], nums2[index2] ] );
    }
    return ret;
};

var kSmallestPairsBruteForce = function(nums1, nums2, k) {
    
    
    let ret = [];
    for ( let i = 0 ; i < nums1.length ; i++ ) {
        for ( let j = 0; j < nums2.length ; j++ ) {
            ret.push( [ nums1[i], nums2[j] ] );
        }
    }
    // console.log( ret )
    ret = ret.sort( (a, b) => (a[0]+a[1]) - (b[0]+b[1]) );
    // console.log( ret )
    if ( ret.length > k ) {
        ret.splice( k, Number.MAX_VALUE );
    }
    return ret;
    
    
};

/** 
[1,7,11]
[2,4,6]
3
[1,1,2]
[1,2,3]
2
[1,2]
[3]
3
[-10,-4,0,0,6]
[3,5,6,7,8,100]
10
*/