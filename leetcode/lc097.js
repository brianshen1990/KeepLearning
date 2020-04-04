/**
97. Interleaving String

Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
*/


/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    
    if ( s3.length  !== s1.length + s2.length ) {
        return false;
    }
    
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    const n = {
        s1: s1,
        s2: s2, 
        s3: s3
    };
    return helper(n, index1, index2, index3);
};

var helper = function(n, index1, index2, index3) {
    // console.log( index1, index2, index3 );
    let { s1, s2, s3 } = n;
    
    if( index3 ===  s3.length) {
        return true;
    }
    while ( index3  < s3.length ) {
        if ( index1 < s1.length && index2 < s2.length 
            && s1[index1] === s2[index2] && s2[index2] === s3[index3] ) {
            // try s1, then try s2
            let tempMap = false;
            tempMap = helper(n, index1+1, index2, index3+1);
            if( tempMap ) {
                return true;
            }
            tempMap = helper(n, index1, index2+1, index3+1);
            if( tempMap ) {
                return true;
            }
            return false;
        } else if ( index1 < s1.length && s3[index3] === s1[index1] ) {
            // OK, next
            index1++;
            index3++;
        } else if ( index2 < s2.length && s3[index3] === s2[index2]) {
            index2++;
            index3++;
        } else {
            // cannot find any matched ones
            return false;
        } 
    }
    if( index3 ===  s3.length) {
        return true;
    }
}

console.log( isInterleave( "aabcc", "dbbca", "aadbbcbcac" ) === true );
console.log( isInterleave( "aabcc", "dbbca", "aadbbbaccc" ) === false );
console.log( isInterleave( "", "a", "a" ) === true );
console.log( isInterleave( "a", "", "a" ) === true );
console.log( isInterleave( "", "a", "b" ) === false );
console.log( isInterleave( "a", "", "b" ) === false );
console.log( isInterleave( "", "", "" ) === true );
console.log( isInterleave( "aaaa", "aaaa", "aaaaaaaa" ) === true );
console.log( isInterleave( "aaaa", "bbbb", "abababab" ) === true );
console.log( isInterleave( "aabaa", "bbbb", "abababab" ) === false );
console.log( isInterleave( "aabbaa", "bbbb", "ababbbabab" ) === true );
console.log( isInterleave( "aacaac", "aacaaeaac", "aacaaeaaeaacaac" ) === false );


