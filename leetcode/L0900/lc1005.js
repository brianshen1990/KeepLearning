/**
1005. Maximize Sum Of Array After K Negations

Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)

Return the largest possible sum of the array after modifying it in this way.

 

Example 1:

Input: A = [4,2,3], K = 1
Output: 5
Explanation: Choose indices (1,) and A becomes [4,-2,3].
Example 2:

Input: A = [3,-1,0,2], K = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].
Example 3:

Input: A = [2,-3,-1,5,-4], K = 2
Output: 13
Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].
 

Note:

1 <= A.length <= 10000
1 <= K <= 10000
-100 <= A[i] <= 100
 */



/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    let absMin = Number.MAX_VALUE;
    let posSum = 0;
    A.filter( item => item >= 0 ).forEach( item => {
        posSum += item;
        absMin = Math.min( absMin, item );
    })
    
    const negArr = A.filter( item => item < 0 ).sort( (a, b) => a-b );
    if ( negArr.length > 0 ) {
        absMin = Math.min( absMin, -negArr[negArr.length-1] );
    }
    
    // console.log( absMin, posSum, negArr );
    
    if ( K < negArr.length ) { // try reverse bigger ones
        for ( let i = 0 ; i < K ; i++ ) {
            posSum += -negArr[i];
        }
        for ( let i = K ; i < negArr.length ; i++ ) {
            posSum += negArr[i];
        }
        return posSum; 
    } else {
        for ( let i = 0 ; i < negArr.length ; i++ ) {
            posSum += -negArr[i];
        }
        K = K - negArr.length;
        if ( K % 2 !== 0 ) {
            posSum -= 2 * absMin;
        }
        return posSum;
    }
    
    
};


/**
[4,2,3]
1
[3,-1,0,2]
3
[2,-3,-1,5,-4]
2
 */