/**
1513. Number of Substrings With Only 1s

Given a binary string s (a string consisting only of '0' and '1's).

Return the number of substrings with all characters 1's.

Since the answer may be too large, return it modulo 10^9 + 7.

 

Example 1:

Input: s = "0110111"
Output: 9
Explanation: There are 9 substring in total with only 1's characters.
"1" -> 5 times.
"11" -> 3 times.
"111" -> 1 time.
Example 2:

Input: s = "101"
Output: 2
Explanation: Substring "1" is shown 2 times in s.
Example 3:

Input: s = "111111"
Output: 21
Explanation: Each substring contains only 1's characters.
Example 4:

Input: s = "000"
Output: 0
 

Constraints:

s[i] == '0' or s[i] == '1'
1 <= s.length <= 10^5
*/


/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let ret = 0 ;
    let index = 0;
    while ( index < s.length ) {
        if ( s[index] === '0' ) {
            index++;
            continue;
        }
        let nextIndex = index + 1;
        while ( nextIndex < s.length && s[nextIndex] === '1' ) {
            nextIndex++;
        }  
        let diff = nextIndex - index;
        if ( diff === 1 ) {
            ret++;
        } else {
            ret += diff * (diff+1) / 2;
        }
        ret = ret % 1000000007;
        index = nextIndex;
    }
    return ret;
    
};


/* 
"0110111"
"101"
"111111"
"000"
*/