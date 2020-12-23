/**
1446. Consecutive Characters

Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return the power of the string.

 

Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
Example 2:

Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
Example 3:

Input: s = "triplepillooooow"
Output: 5
Example 4:

Input: s = "hooraaaaaaaaaaay"
Output: 11
Example 5:

Input: s = "tourist"
Output: 1
 

Constraints:

1 <= s.length <= 500
s contains only lowercase English letters.

 */

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let ret = 0;
    if ( s.length > 0 ) ret = 1;
    let index = 1;
    while ( index < s.length ) {
        if ( s[index] === s[index-1] ) {
            let next = index;
            while ( next < s.length && s[next] === s[index] ) {
                next++;
            }
            ret = Math.max(ret, next - index + 1);
            index = next;
        } else {
            index++;
        }
    } 
    
    return ret;
    
};

