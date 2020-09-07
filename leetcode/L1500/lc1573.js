/**

1573. Number of Ways to Split a String

Given a binary string s (a string consisting only of '0's and '1's), we can split s into 3 non-empty strings s1, s2, s3 (s1+ s2+ s3 = s).

Return the number of ways s can be split such that the number of characters '1' is the same in s1, s2, and s3.

Since the answer may be too large, return it modulo 10^9 + 7.

 

Example 1:

Input: s = "10101"
Output: 4
Explanation: There are four ways to split s in 3 parts where each part contain the same number of letters '1'.
"1|010|1"
"1|01|01"
"10|10|1"
"10|1|01"
Example 2:

Input: s = "1001"
Output: 0
Example 3:

Input: s = "0000"
Output: 3
Explanation: There are three ways to split s in 3 parts.
"0|0|00"
"0|00|0"
"00|0|0"
Example 4:

Input: s = "100100010100110"
Output: 12
 

Constraints:

s[i] == '0' or s[i] == '1'
3 <= s.length <= 10^5

 */


/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
    if ( s.length < 3 ) return 0;
    let count1 = s.split("").filter( item => item === '1' ).length;
    if ( count1 % 3 !== 0 ) return 0;
    if ( count1 === 0 ) return ((s.length-1) * (s.length-2) / 2 ) % 1000000007;
    count1 = count1 / 3;
    
    let cuts = [0,0];
    let index = 0;
    let cnt = 0;
    while ( cnt < count1 ) {
        if ( s[index] === '1' ) {
            cnt++;
            if ( cnt === count1 ) break;
        }
        index++;
    }
    let nextIndex = index+1;
    while ( s[nextIndex] === '0' ) {
        nextIndex++;
    }
    cuts[0] = nextIndex - 1 - index;
    
    cnt = 0;
    index = index+1;
    while ( cnt < count1 ) {
        if ( s[index] === '1' ) {
            cnt++;
            if ( cnt === count1 ) break;
        }
        index++;
    }
    nextIndex = index+1;
    while ( s[nextIndex] === '0' ) {
        nextIndex++;
    }
    cuts[1] = nextIndex - 1 - index;
    console.log("====", cuts )
    cuts[0] = cuts[0] + 1 ;
    cuts[1] = cuts[1] + 1 ; 
    console.log( cuts )
    return (cuts[0] || 1) * ( cuts[1] || 1 ) % 1000000007
    
};
/**
"10101"
"1001"
"0000"
"100100010100110"
 */