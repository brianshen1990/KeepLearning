/**

583. Delete Operation for Two Strings

Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.

Example 1:
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
Note:
The length of given words won't exceed 500.
Characters in given words can only be lower-case letters.
 */


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    const totalLen = word1.length + word2.length;
    if ( word1.length === 0 || word2.length === 0 ) {
        return totalLen;
    }
    
    // matrix
    const matrix = [];
    for( let i = 0 ; i < word1.length ; i++ ) {
        matrix.push( new Array( word2.length ).fill(totalLen) );
    }
    
    // init
    for ( let i = 1 ; i <= word2.length ; i++ ) {
        if ( word2.substr(0, i).indexOf(word1[0]) >= 0 ) {
            matrix[0][i-1] = i - 1;
        } else {
            matrix[0][i-1] = i + 1;
        }
    }
    for ( let i = 2 ; i <= word1.length ; i++ ) {
        if ( word1.substr(0, i).indexOf(word2[0]) >= 0 ) {
            matrix[i-1][0] = i - 1;
        } else {
            matrix[i-1][0] = i + 1;
        }
    }
    
    // console.log( matrix )
    // dp
    for ( let i = 1 ; i < word1.length ; i++ ) {
        for ( let j = 1 ; j < word2.length ; j++ ) {
            if ( word1[i] === word2[j] ) {
                matrix[i][j] = Math.min( matrix[i-1][j-1], matrix[i-1][j]+1, matrix[i][j-1]+1 );
            } else {
                matrix[i][j] = Math.min( matrix[i-1][j]+1, matrix[i][j-1]+1 );
            }
        }
    }
    
    // console.log( matrix )
    
    // res
    return matrix[word1.length-1][word2.length-1];
};


/**
"sea"
"eat"
"sea"
""
"sea"
"eatuqiweuqwsaea"
"eatuqiweuqwsaea"
"sea"
"wyequwdhsakdakdas"
"wyequwdhsakdakqwueiqw"
"park"
"spake"
 */