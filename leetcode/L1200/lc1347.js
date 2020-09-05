/**

1347. Minimum Number of Steps to Make Two Strings Anagram

Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

Example 1:

Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
Example 2:

Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
Example 3:

Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams. 
Example 4:

Input: s = "xxyyzz", t = "xxyyzz"
Output: 0
Example 5:

Input: s = "friend", t = "family"
Output: 4
 

Constraints:

1 <= s.length <= 50000
s.length == t.length
s and t contain lower-case English letters only.
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    
    const aCode = 'a'.charCodeAt(0);
    const oriArr = new Array(26).fill(0);
    const desArr = new Array(26).fill(0);
    
    s.split("").forEach( item => {
        oriArr[ item.charCodeAt(0) - aCode ] += 1;   
    })
    t.split("").forEach( item => {
        desArr[ item.charCodeAt(0) - aCode ] += 1;   
    })
    
    let diff = 0;
    for ( let i = 0 ; i < 26; i++ ) {
        diff += Math.abs( oriArr[i] - desArr[i] );
    }
    return diff / 2;
};


/**
"bab"
"aba"
"leetcode"
"practice"
"anagram"
"mangaar"
"xxyyzz"
"xxyyzz"
"friend"
"family"
 */