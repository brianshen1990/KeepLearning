/**
985. Sum of Even Numbers After Queries

We have an array nums of integers, and an array queries of queries.

For the i-th query val = queries[i][0], index = queries[i][1], we add val to nums[index].  Then, the answer to the i-th query is the sum of the even values of A.

(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array nums.)

Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

 

Example 1:

Input: nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
Explanation: 
At the beginning, the array is [1,2,3,4].
After adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.
 

Note:

1 <= nums.length <= 10000
-10000 <= nums[i] <= 10000
1 <= queries.length <= 10000
-10000 <= queries[i][0] <= 10000
0 <= queries[i][1] < nums.length
 */



/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
    const cache = new Array(nums.length).fill(false);
    let sum = 0;
    for ( let i = 0 ; i < nums.length ; i++ ) {
        if ( nums[i] % 2 === 0 ) {
            cache[i] = true;
            sum += nums[i];
        }
    }
    
    let res = [];
    queries.forEach( item => {
        const [ val, index ] = item;
        if ( cache[index] ) {
            if ( val % 2 === 0 ) {
                // even + even
                sum += val;  
            } else {
                // even + odd
                sum -= nums[index];
                cache[index] = false;
            }
        } else {
            if ( val % 2 !== 0 ) {
                // odd + odd 
                sum += nums[index] + val;
                cache[index] = true;
            } else {
                // odd + even, no change
            }
        }
        res.push(sum);
        nums[index] += val;
    })
    
    return res;
};



/**
[1,2,3,4]
[[1,0],[-3,1],[-4,0],[2,3]]
 */