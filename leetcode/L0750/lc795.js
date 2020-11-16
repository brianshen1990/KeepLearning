/**
795. Number of Subarrays with Bounded Maximum

We are given an array A of positive integers, and two positive integers L and R (L <= R).

Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least L and at most R.

Example :
Input: 
A = [2, 1, 4, 3]
L = 2
R = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
Note:

L, R  and A[i] will be an integer in the range [0, 10^9].
The length of A will be in the range of [1, 50000].
 */


/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
    let ret = 0 ;
    let preBeg = -1;
    let beg = 0 ;
    let end = 0 ;
    let num = 0 ;
    
    while ( end < A.length ) {
        if ( A[end] > R ) {
            beg = end+1;
            end = end+1;
            num = 0 ;
            continue;
        }
        
        if ( A[end] >= L ) {
            num++;
        }
        
        if ( num > 0 && A[end] >= L ) {
            // include this and all front
            // console.log( beg, end )
            ret += end - beg + 1;
            preBeg = end;
        }
        if ( num > 0 && A[end] < L ) {
            // need include this, need the pre one to beg
            // console.log( beg, end, preBeg )
            ret += preBeg - beg + 1;
        }
        end++;
    }
    
    return ret;
    
};

/**
[2,1,4,3]
2
3
[2,1,1,1,1,1,1,4,3]
2
3
[2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,4,3]
2
3
[1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,4,3]
2
3
[4]
2
3
[4,3,2,1]
2
3
[1,1,1,1,1,1,1,1,1,1,2]
2
3
[3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3]
2
3
 */