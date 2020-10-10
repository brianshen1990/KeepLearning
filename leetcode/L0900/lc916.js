/**

916. Word Subsets

We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a. 

Return a list of all universal words in A.  You can return the words in any order.

 

Example 1:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
Output: ["facebook","google","leetcode"]
Example 2:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
Output: ["apple","google","leetcode"]
Example 3:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
Output: ["facebook","google"]
Example 4:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
Output: ["google","leetcode"]
Example 5:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
Output: ["facebook","leetcode"]
 

Note:

1 <= A.length, B.length <= 10000
1 <= A[i].length, B[i].length <= 10
A[i] and B[i] consist only of lowercase letters.
All words in A[i] are unique: there isn't i != j with A[i] == A[j].
 */

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
  const ACode = 'a'.charCodeAt(0);
  
  let need = new Array(26).fill(0);
  B.forEach( item => {
      const temp = new Array(26).fill(0);
      item.split("").forEach( char => {
          temp[ char.charCodeAt(0) - ACode ]++;
      });
      
      for ( let i = 0 ; i < 26 ; i++ ) {
          need[i] = Math.max( need[i], temp[i] );
      }
  })
  
  // console.log(need);
  
  
  const cache = {};
  return A.filter( item => {
      const temp = new Array(26).fill(0);
      item.split("").forEach( char => {
          temp[ char.charCodeAt(0) - ACode ]++;
      });  
      let ret = true;
      for ( let i = 0 ; i < 26 ; i++ ) {
          if ( temp[i] < need[i] ) {
              ret = false;
              break;
          }
      }
      return ret;
  })
  
};

/**
["amazon","apple","facebook","google","leetcode"]
["e","o"]
["amazon","apple","facebook","google","leetcode"]
["l","e"]
["amazon","apple","facebook","google","leetcode"]
["e","oo"]
["amazon","apple","facebook","google","leetcode"]
["lo","eo"]
["amazon","apple","facebook","google","leetcode"]
["ec","oc","ceo"]
*/
