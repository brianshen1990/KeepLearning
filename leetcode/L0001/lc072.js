/**
72. Edit Distance

Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')


*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
  const matrix = [];
  for ( let i = 0; i <= word2.length; i++ ) {
      const temp = [];
      for ( let j = 0 ; j <= word1.length ; j++) {
          temp.push(-1);
      }
      matrix.push(temp);
  }
  // initialize
  for ( let i = 0; i<= word2.length ; i++ ) {
      matrix[i][0] = i;
  }
  for ( let i = 0; i <= word1.length ; i++ ) {
      matrix[0][i] = i;
  }
  // DP 
  for ( let i = 1 ; i <= word2.length ; i++ ) {
      for ( let j = 1 ; j <= word1.length ; j++ ) {
          let temp = -1;
          if ( word2[i-1] === word1[j-1] ) {
              // same char, so replace do not need +1
              temp = Math.min(matrix[i-1][j-1], matrix[i-1][j]+1, matrix[i][j-1]+1); 
          } else {
              // different char, so replace dalso need + 1
              temp = Math.min( matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1] ) + 1;
          }
          matrix[i][j] = temp;
      }
  }
  
  
  // console.log( matrix );
  return matrix[word2.length][word1.length];
  
};

/**
"horse"
"ros"
"horse"
""
""
"horse"
"intention"
"execution"
*/
