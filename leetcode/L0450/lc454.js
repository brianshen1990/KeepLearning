/**

454. 4Sum II

Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const combineAB = {};
    A.forEach( itemA => {
        B.forEach( itemB => {
            const temp = itemA + itemB;
            combineAB[ temp ] = combineAB[ temp ] || 0;
            combineAB[ temp ] += 1;
        })
    });
    const combineCD = {};
    C.forEach( itemC => {
        D.forEach( itemD => {
            const temp = itemC + itemD;
            combineCD[ temp ] = combineCD[ temp ] || 0;
            combineCD[ temp ] += 1;
        })
    });
    
    let cnt = 0;
    Object.keys(combineAB).forEach( item => {
        const left = 0 - item;
        if ( left in combineCD ) {
            cnt += combineCD[left] * combineAB[item];
        }
    });
    return cnt;
};

/**
[1,2]
[-2,-1]
[-1,2]
[0,2]
 */