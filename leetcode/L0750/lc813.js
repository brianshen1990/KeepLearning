/**

813. Largest Sum of Averages

We partition a row of numbers A into at most K adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

Example:
Input: 
A = [9,1,2,3,9]
K = 3
Output: 20
Explanation: 
The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned A into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
 

Note:

1 <= A.length <= 100.
1 <= A[i] <= 10000.
1 <= K <= A.length.
Answers within 10^-6 of the correct answer will be accepted as correct.

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumOfAverages = function(nums, k) {
    
    const sumArr = new Array(nums.length+1).fill(0);
    for ( let i = 1 ; i <= nums.length; i++ ) {
        sumArr[i] = sumArr[i-1] + nums[i-1];
    }
    // console.log(sumArr);
    
    const cache = {};
    const helper = ( start, end, leftK ) => {
        
        const str = `${start}_${end}_${leftK}`;
        if ( str in cache ) return cache[str];
        
        let temp = 0;
        if ( leftK === 1 ) {
            temp =  (sumArr[end] - sumArr[start]) / (end - start);
        } else {
            for ( let i = start+1 ; i + leftK - 1 <= end ; i++ ) {
                temp = Math.max( temp, 
                               helper( i, end, leftK-1 ) +  (sumArr[i] - sumArr[start] ) / (i - start)
                               );
            }
        }
        
        cache[str] = temp;
        // console.log(str, temp);
        return temp;
    }
    
    return helper(0, nums.length, k);
    
};

/**
[9,1,2,3,9]
3
[9,1,2,3,9]
5
[9,1,2,3,9,9,1,2,3,9]
3
[9,1,2,3,9,9,1,2,3,9]
5
[9,1,2,3,9,9,1,2,3,9]
1
 */