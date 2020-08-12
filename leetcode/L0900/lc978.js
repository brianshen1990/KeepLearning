/**
978. Longest Turbulent Subarray

A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent if and only if:

For i <= k < j, A[k] > A[k+1] when k is odd, and A[k] < A[k+1] when k is even;
OR, for i <= k < j, A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd.
That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

Return the length of a maximum size turbulent subarray of A.

 

Example 1:

Input: [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: (A[1] > A[2] < A[3] > A[4] < A[5])
Example 2:

Input: [4,8,12,16]
Output: 2
Example 3:

Input: [100]
Output: 1
 

Note:

1 <= A.length <= 40000
0 <= A[i] <= 10^9

 */



/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
    if ( A.length === 0 ) {
        return 0;
    }
    
    // init 
    const seq = [ [1,1], [1,1] ]; // we only need to remember 2 elements instead of all
    seq[0] = [1,1];  // [ asc, desc ]
    
    // go DP
    let max = 1; 
    for ( let i = 1 ; i < A.length ; i++ ) {
        seq[1] = [1, 1];
        if ( A[i] > A[i-1] ) {
            seq[1][0] = seq[0][1] + 1;
        }
        if ( A[i] < A[i-1] ) {
            seq[1][1] = seq[0][0] + 1;
        }
        max = Math.max( seq[1][0], seq[1][1], max );
        seq[0] = seq[1];
    }

    return max;
};

/**
[9,4,2,10,7,8,8,1,9]
[4,8,12,16]
[4,8,12,16,23,12,43,45,2,3,34,1,321,24,123]
[100]
 */