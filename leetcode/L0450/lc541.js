/**

541. Reverse String II

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let ret = "";
    for ( let i = 0 ; i < s.length ; i = i+2*k ) {
        let tempStr = s.substr(i, 2*k);
        let first = tempStr.substr(0, k);
        ret += first.split("").reverse().join("") + tempStr.substr(k);
    }
    
    return ret;
};

/**
"abcdefg"
2
"abcdefg"
10
"abcdefg"
5
"abcdefg"
1
"abcdefg"
100
""
2
"abcdefg"
7
 */