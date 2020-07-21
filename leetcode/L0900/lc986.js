/**
986. Interval List Intersections

Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

(Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  The intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].)

 

Example 1:

Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

Note:

0 <= A.length < 1000
0 <= B.length < 1000
0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9
 */



/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */

var intervalIntersection = function(A, B) {
    let indexA = 0;
    let indexB = 0;
    let ret = [];
    while ( indexA < A.length && indexB < B.length ) {
      if ( A[indexA][1] < B[indexB][0] ) {
        indexA++;
        continue;
      }
      if ( B[indexB][1] < A[indexA][0] ) {
        indexB++;
        continue;
      }
      
      if ( A[indexA][0] >= B[indexB][0] && A[indexA][1] <= B[indexB][1] ) {
          // B include A
          ret.push( A[indexA] );
          if ( A[indexA][1] === B[indexB][1] ) {
            indexB++; // end together , should both add 1 
          } else {
            B[indexB][0] = A[indexA][1] + 1; 
          }
          indexA++;
          continue;
      }
      if ( A[indexA][0] <= B[indexB][0] && A[indexA][1] >= B[indexB][1] ) {
          // A include B
          ret.push( B[indexB] );
          if ( A[indexA][1] === B[indexB][1] ) {
            indexA++; // end together , should both add 1 
          } else {
            A[indexA][0] = B[indexB][1] + 1; 
          }
          indexB++;
          continue;
      }
      
      if ( A[indexA][0] >= B[indexB][0] && A[indexA][1] >= B[indexB][1] ) {
         // A begin bigger than B and end bigger than B -> [2,5] [1 4]
         ret.push( [ A[indexA][0], B[indexB][1] ] );
         if ( A[indexA][1] === B[indexB][1] ) {
           indexA++;
         } else {
           A[indexA][0] = B[indexB][1] + 1;
         }
         indexB++;
         continue;
      }
      
      if ( A[indexA][0] <= B[indexB][0] && A[indexA][1] <= B[indexB][1] ) {
        // A begin smaller than B and end smaller than B ->  [1 4] [2,5]
        ret.push( [ B[indexB][0], A[indexA][1] ] );
         if ( A[indexA][1] === B[indexB][1] ) {
           indexB++;
         } else {
           B[indexB][0] = A[indexA][1] + 1;
         }
         indexA++;
         continue;
      }
    }
    return ret;
    
};



/**
[[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]
[[0,2]], [[3,4]]
[[0,2]], [[2,4]]
[[0,2]], []
[[0,2]], [[1,4]]
[[1,4]], [[0,2]] 
 */