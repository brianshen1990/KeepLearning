/**
835. Image Overlap

Two images A and B are given, represented as binary, square matrices of the same size.  (A binary matrix has only 0s and 1s as values.)

We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.

(Note also that a translation does not include any kind of rotation.)

What is the largest possible overlap?

Example 1:

Input: A = [[1,1,0],
            [0,1,0],
            [0,1,0]]
       B = [[0,0,0],
            [0,1,1],
            [0,0,1]]
Output: 3
Explanation: We slide A to right by 1 unit and down by 1 unit.
Notes: 

1 <= A.length = A[0].length = B.length = B[0].length <= 30
0 <= A[i][j], B[i][j] <= 1
 */


/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
    // for sparse matrix
    const listA = [];
    for ( let i = 0 ; i < A.length ; i++ ) {
        for ( let j = 0 ; j < A[0].length ; j++ ) {
            if ( A[i][j] ) listA.push([i, j]);
        }
    }
    const listB = [];
    for ( let i = 0 ; i < B.length ; i++ ) {
        for ( let j = 0 ; j < B[0].length ; j++ ) {
            if ( B[i][j] ) listB.push([i, j]);
        }
    }
    // console.log( listA, listB )
    
    // the point is that every position in B can be moved to position A
    // And we just move it to see why kind of move is needed
    // and then aggregate by move ! genius
    const cache = {};
    let max = 0;
    for ( let i = 0 ; i < listA.length ; i++ ) {
        for ( let j = 0 ; j < listB.length ; j++ ) {
            const str = `${listA[i][0]-listB[j][0]}_${listA[i][1]-listB[j][1]}`;
            // console.log( str );
            cache[str] = cache[str] || 0;
            cache[str] += 1;
            max = Math.max( max, cache[str] );
        }
    }
    
    return max;
};


/**
[[1,1,0],[0,1,0],[0,1,0]]
[[0,0,0],[0,1,1],[0,0,1]]
[[0]]
[[0]]
[[1]]
[[1]]
 */