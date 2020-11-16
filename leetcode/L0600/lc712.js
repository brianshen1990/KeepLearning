/**
712. Minimum ASCII Delete Sum for Two Strings

Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

Example 1:
Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
Example 2:
Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
Note:

0 < s1.length, s2.length <= 1000.
All elements of each string will have an ASCII value in [97, 122].
 */


/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    
    // matrix dp
    const matrix = [];
    for ( let i = 0 ; i < s1.length ; i++ ) {
        const temp = [];
        for ( let j = 0 ; j < s2.length ; j++ ) {
            temp.push(0);
        }
        matrix.push(temp);
    }
    

    // init
    if ( s1[0] === s2[0] ) {
        matrix[0][0] = s1[0].charCodeAt(0);    
    }
    for ( let i = 1 ; i < s1.length ; i++ ) {
        if ( s1[i] === s2[0] ) {
            matrix[i][0] = Math.max( matrix[i-1][0], s1[i].charCodeAt(0) );
        } else {
            matrix[i][0] = matrix[i-1][0];
        }
    }
    for ( let i = 1 ; i < s2.length ; i++ ) {
        if ( s2[i] === s1[0] ) {
            matrix[0][i] = Math.max( matrix[0][i-1], s2[i].charCodeAt(0) );
        } else {
            matrix[0][i] = matrix[0][i-1];
        }
    }
    
    // go dp
    for ( let i = 1 ; i < s1.length ; i++ ) {
        for ( let j = 1 ; j < s2.length ; j++ ) {
            if ( s1[i] === s2[j] ) {
               matrix[i][j] = Math.max( matrix[i-1][j-1] + s1[i].charCodeAt(0) , matrix[i-1][j], matrix[i][j-1] );
            } else {
                matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
            }
        }
    }
    
    // result
    let sum = (s1+s2).split("").reduce( (acc, item) => acc + item.charCodeAt(0), 0 );
    return sum - matrix[s1.length-1][s2.length-1] * 2;
    
};


/**
"a"
"at"
"sea"
"eat"
"delete"
"leet"
"abc"
"def"
"a"
"zzzzza"
*/