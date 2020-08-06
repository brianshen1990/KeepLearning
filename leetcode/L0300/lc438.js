/**
438. Find All Anagrams in a String

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 */


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if ( s.length < p.length ) {
        return [];
    }
    const aCode = 'a'.charCodeAt(0);
    const EQ = new Array(26).fill(0);
    const Compare =  new Array(26).fill(0);
    
    for ( let i = 0; i < p.length ; i++ ) {
        EQ[p[i].charCodeAt(0) - aCode]++
        Compare[s[i].charCodeAt(0) - aCode]++;
    }
    const EQStr = EQ.join("_");
    
    const ret = [];
    if ( Compare.join("_") === EQStr ) {
        ret.push(0);
    }
    for ( let i = 1 ; i <= s.length-p.length ; i++ ) {
        Compare[s[i-1].charCodeAt(0) - aCode]--;
        Compare[s[i+p.length-1].charCodeAt(0) - aCode]++;
        if ( Compare.join("_") === EQStr ) {
            ret.push(i);
        }
    }
    return ret;
};


/** 
"cbaebabacd"
"abc"
"abab"
"ab"
"ab"
"ba"
"ab"
"cd"
"ab"
"c"
"ab"
"cdawwqab"
*/