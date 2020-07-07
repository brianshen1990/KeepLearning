/**
378. Kth Smallest Element in a Sorted Matrix

Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note:
You may assume k is always valid, 1 ≤ k ≤ n2.

 */


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    
    const indexes = new Array(matrix.length).fill(0);
    let ret = 0;
    for ( let i = 0 ; i < k ; i++ ) {
        let minVal = Number.MAX_VALUE
        let minInd = [];
        
        for ( let j = 0 ; j < matrix.length ; j++  ) {
            if ( indexes[j] < matrix.length && matrix[ j ][ indexes[j] ] < minVal ) {
                minVal = matrix[ j ][ indexes[j] ];
                minInd = [ j, indexes[j] ];
            }
        }
        indexes[minInd[0]]++;
        ret = minVal;
        // console.log(i+1, ret);
    }
    return ret;
    
};



/** 
[[1,5,9],[10,11,13],[12,13,15]]
8
[[1,5,9],[10,11,13],[12,13,15]]
9
[[1,5,9],[10,11,13],[12,13,15]]
4
*/