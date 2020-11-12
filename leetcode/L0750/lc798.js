/**
798. Smallest Rotation with Highest Score

 Given an array A, we may rotate it by a non-negative integer K so that the array becomes A[K], A[K+1], A{K+2], ... A[A.length - 1], A[0], A[1], ..., A[K-1].  Afterward, any entries that are less than or equal to their index are worth 1 point. 

For example, if we have [2, 4, 1, 3, 0], and we rotate by K = 2, it becomes [1, 3, 0, 2, 4].  This is worth 3 points because 1 > 0 [no points], 3 > 1 [no points], 0 <= 2 [one point], 2 <= 3 [one point], 4 <= 4 [one point].

Over all possible rotations, return the rotation index K that corresponds to the highest score we could receive.  If there are multiple answers, return the smallest such index K.

Example 1:
Input: [2, 3, 1, 4, 0]
Output: 3
Explanation:  
Scores for each K are listed below: 
K = 0,  A = [2,3,1,4,0],    score 2
K = 1,  A = [3,1,4,0,2],    score 3
K = 2,  A = [1,4,0,2,3],    score 3
K = 3,  A = [4,0,2,3,1],    score 4
K = 4,  A = [0,2,3,1,4],    score 3
So we should choose K = 3, which has the highest score.

 

Example 2:
Input: [1, 3, 0, 2, 4]
Output: 0
Explanation:  A will always have 3 points no matter how it shifts.
So we will choose the smallest K, which is 0.
Note:

A will have length at most 20000.
A[i] will be in the range [0, A.length].

 */


/**
 * @param {number[]} A
 * @return {number}
 */
var bestRotation = function(A) {
    if ( A.length === 0 ) {
        return 0;
    }
    
    // expected, which will turn <0 -> >= 0
    const arr = new Array( A.length ).fill(0);
    // current sitaution 
    A = A.map( (item, index) => index - item );
    // console.log(A);
    
    A.forEach( (item, index) => {
        if ( item < 0 ) {
            // How can I turn to >= 0
            //   1. Wish circle to end : K > index 
            //   2. Wish after circle and >= 0 :  ( N - K + item ) >= 0
            //       -> K <= N + item
            for ( let i = index+1 ; i <= arr.length + item ; i++ ) {
                arr[i]++;
            } 
        } else {
            // How will I tunr. < 0
            //   1. Decrease to < 0 : K > item 
            //   2. Not circle to end : K <= index
            for ( let i = item+1 ; i <= index ; i++ ) {
                arr[i]--;
            }
        }
        // console.log( arr )
    })
    // console.log( arr );
    
    const Max = Math.max( ...arr );
    return arr.indexOf(Max);
    
};

/**
[2,3,1,4,0]
[1, 3, 0, 2, 4]
[2,3,1,4,0,9,8,7,6,5,11,13,14,10,12]
[]
[1]
[2,1]
[0]
[0,1]
 */