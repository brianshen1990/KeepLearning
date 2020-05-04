/**
801. Minimum Swaps To Make Sequences Increasing

We have two integer sequences A and B of the same non-zero length.

We are allowed to swap elements A[i] and B[i].  Note that both elements are in the same index position in their respective sequences.

At the end of some number of swaps, A and B are both strictly increasing.  (A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)

Given A and B, return the minimum number of swaps to make both sequences strictly increasing.  It is guaranteed that the given input always makes it possible.

Example:
Input: A = [1,3,5,4], B = [1,2,3,7]
Output: 1
Explanation: 
Swap A[3] and B[3].  Then the sequences are:
A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
which are both strictly increasing.
Note:

A, B are arrays with the same length, and that length will be in the range [1, 1000].
A[i], B[i] are integer values in the range [0, 2000].

 */


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
  // init 
  const seq = [];
  for ( let i = 0 ; i< A.length ; i++ ) {
      seq.push({
          swap: -1,
          keep:-1
      })
  };
  seq[0] = {
      swap: A[0] === B[0] ? 0 : 1,
      keep: 0
  };
  
  for ( let i = 1; i < A.length ; i++ ) {
      if ( B[i] === A[i] ) {
          // no need, take the min 
          seq[i].keep = Math.min( seq[i-1].keep, seq[i-1].swap )
          seq[i].swap = seq[i].keep;
      } else if ( B[i] > B[i-1] && A[i] > A[i-1] ) {
          if ( B[i] > A[i-1] && A[i] > B[i-1] ) {
              // keep can take from keep or swap, swap can take from keep or swap
              seq[i].keep = Math.min(seq[i-1].keep, seq[i-1].swap)
              seq[i].swap = seq[i].keep + 1;
          } else {
              // keep can only take from keep, swap can only take from swap 
              seq[i].keep = seq[i-1].keep;
              seq[i].swap = seq[i-1].swap + 1;
          }
      } else {
          // need swap 
          // if we swap, then previous need no swap
          seq[i].swap = seq[i-1].keep+1;
          // if we want to keep, then previous must swap 
          seq[i].keep = seq[i-1].swap; 
      }
  }
  // console.log( seq );
  return Math.min( seq[seq.length-1].swap, seq[seq.length-1].keep )
};

/**
[1,3,5,4]
[1,2,3,7]
[1,4,7,9,6,8,9,10]
[1,2,4,5,11,12,13,14]
[1]
[1]
[1,2]
[1,2]
[0,1,4,6,8]
[1,2,2,7,10]
 */