/**

516. Longest Palindromic Subsequence

Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

Example 1:
Input:

"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
 

Example 2:
Input:

"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
 

Constraints:

1 <= s.length <= 1000
s consists only of lowercase English letters.

 */



/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    // longest common string for 
    // b b b a b
    // b a b b b
    // 
    //   s1 
    // 4 b  1
    // 3 b  1
    // 2 b  1 
    // 1 a  0 1 1 2 2
    // 0 b  1 1 1 0 1
    //      b b b a b -> s
    //      0 1 2 3 5 
    
    
    // init
    const matrix = [];
    const s1 = s.split("").reverse().join("");
    for ( let i = 0 ; i < s.length ; i++ ) {
        matrix.push( new Array(s.length).fill(0) );
    }
    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( s[i] === s1[0] ) {
            matrix[0][i] = 1;
            while ( i < s.length ) {
                matrix[0][i] = 1;
                i++;
            }
        }
    }
    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( s1[i] === s[0] ) {
            matrix[i][0] = 1;
            while ( i < s.length ) {
                matrix[i][0] = 1;
                i++;
            }
        }
    }
    
    // go dp
    for ( let i = 1 ; i < s.length ; i++ ) {
        for ( let j = 1 ; j < s.length ; j++ ) {
            if ( s1[i] === s[j] ) {
                matrix[i][j] = Math.max( matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]+1 );
            } else {
                matrix[i][j] = Math.max( matrix[i-1][j], matrix[i][j-1]);
            }
        }
    }
    
    // console.log(matrix)
    // res
    return matrix[s.length-1][s.length-1]; 
    
};



/**
"bbbab"
"cbbd"
"a"
"bbbabbbbabbbbabbbbabbbbabbbbabbbbabbbbabbbbabbbbab"
"abcdefgasdqwdiuwehfewgbfwbdjnweidjwejdew"
 */