/**
1014. Best Sightseeing Pair

Given an array A of positive integers, A[i] represents the value of the i-th sightseeing spot, and two sightseeing spots i and j have distance j - i between them.

The score of a pair (i < j) of sightseeing spots is (A[i] + A[j] + i - j) : the sum of the values of the sightseeing spots, minus the distance between them.

Return the maximum score of a pair of sightseeing spots.

 

Example 1:

Input: [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
 

Note:

2 <= A.length <= 50000
1 <= A[i] <= 1000
 */


/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    // A[i]+i , A[j]-j => i < j
    const arrI = A.map( (item, index) => item + index );
    const arrJ = A.map( (item, index) => item - index );
    
    let ret = -Number.MAX_VALUE;
    let tempMax = -Number.MAX_VALUE;
    for ( let j = A.length-1 ; j > 0 ; j-- ) {
        tempMax = Math.max( tempMax, arrJ[j] );
        ret = Math.max( ret, arrI[j-1] + tempMax );   
    }
    
    return ret;
};


/**
[8,1,5,2,6]
[8,1,5,2,6,8,1,5,2,6]
[8,1,5,2,6,8,1,5,2,6,8,1,5,2,6]
[1,2]
[1,24,21,312,421,4,12]
 */