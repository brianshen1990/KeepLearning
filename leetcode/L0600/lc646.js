/**
646. Maximum Length of Pair Chain

You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.

Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.

Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.

Example 1:
Input: [[1,2], [2,3], [3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4]
Note:
The number of given pairs will be in the range [1, 1000].

 */



/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  if ( pairs.length === 0 ) return 0;
  
  pairs.sort( (a,b) => {
      if ( a[0] < b[0] ) return -1;
      if ( a[0] > b[0] ) return 1;
      return a[1] < b[1] ? -1 : 1;
  });
  
  // console.log( ...pairs )
  
  const seq = new Array( pairs.length ).fill(1);
  
  for ( let i = 1 ; i< pairs.length ; i++ ) {
      for ( let j = 0 ; j < i ; j++ ) {
          if ( pairs[i][0] > pairs[j][1] ) {
              seq[i] = Math.max( seq[i], seq[j] + 1 );
          }
      }
  }
  
  
  return Math.max( ...seq );
};

/**
[[1,2], [2,3], [3,4]]
[[2,3], [3,4], [1,2]]
[]
[[1,2]]
*/