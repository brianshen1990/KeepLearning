/**
1092. Shortest Common Supersequence

Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences.  If multiple answers exist, you may return any of them.

(A string S is a subsequence of string T if deleting some number of characters from T (possibly 0, and the characters are chosen anywhere from T) results in the string S.)

 

Example 1:

Input: str1 = "abac", str2 = "cab"
Output: "cabac"
Explanation: 
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.
 

Note:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of lowercase English letters.

 */


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    
    // init 
    const matrix = [];
    for ( let i = 0 ; i <= str1.length ; i++ ) {
        matrix.push( new Array(str2.length+1).fill(0) );
    }
    
    // go DP 
    for ( let i = 1 ; i <= str1.length ; i++ ) {
        for ( let j = 1; j <= str2.length ; j++ ) {
            matrix[i][j] = Math.max(matrix[i][j], matrix[i-1][j], matrix[i][j-1] );
            if ( str1[i-1] === str2[j-1] ) {
                matrix[i][j] = Math.max( matrix[i][j], matrix[i-1][j-1] + 1 );
            }
        }
    }
    // console.log( matrix );
    
    // res
    let retStr = "";
    let iStr1 = str1.length;
    let jStr2 = str2.length;
    while ( iStr1 >= 0 && jStr2 >= 0 ) {
        if ( matrix[iStr1][jStr2] > 0 ) {
            if ( matrix[iStr1-1][jStr2] < matrix[iStr1][jStr2] && 
                matrix[iStr1][jStr2-1] < matrix[iStr1][jStr2] ) {
                // that's it, only add once
                // console.log( "hit,", iStr1, jStr2 );
                retStr = str1.substr(iStr1) + retStr;
                retStr = str2.substr(jStr2) + retStr;
                retStr = str1[iStr1-1] + retStr;
                str1 = str1.substr(0, iStr1-1);
                str2 = str2.substr(0, jStr2-1);
                iStr1--;
                jStr2--;
            } else {
                if ( matrix[iStr1-1][jStr2] === matrix[iStr1][jStr2] ) {
                    iStr1--;
                } else {
                    jStr2--;
                }
            }
        } else{
            break;
        }
    }
    retStr = str1 + str2 + retStr;
    return retStr;
    
};


/**
"abac"
"cab"
"abac"
"caa"
"cab"
"adbc"
"cafb"
"adbc"
"gcafb"
"adbcm"
"gcafb"
"ladbcm"
"a"
"a"
"a"
"ab"
"aba"
"b"
"ascsdfsfdsf"
"lo"
 */