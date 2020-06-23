/**
347. Top K Frequent Elements

Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
 */



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let cache = {};
    nums.map( item => {
        cache[item] = cache[item] || 0;
        cache[item]++;
    });
    
    let verCache = {};
    Object.keys( cache ).map( item => {
        verCache[ cache[item] ] =  verCache[ cache[item] ] || [];
        verCache[ cache[item] ].push( item );
    });
    
    let values = Object.keys(verCache).sort( (a,b) => b-a );
    let ret = [];
    let index = 0;
    
    while ( ret.length < k ) {
        ret.push(  ...verCache[ values[index] ] );
        index++;
    }
    return ret;
};


/** 
[1,1,1,2,2,3]
2
[1]
1
[1,1,1,4,5,6,7,8,2,1,1,1,1,2,2,2,3]
2
*/