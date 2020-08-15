/**
316. Remove Duplicate Letters

Given a string which contains only lowercase letters, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example 1:

Input: "bcabc"
Output: "abc"
Example 2:

Input: "cbacdcbc"
Output: "acdb"
Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

 */


/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    // const charStr = "abcdefghijklmnopqrstuvwxyz";
    // const aChar = 'a'.charCodeAt(0);
    
    let res = "";
    while( s.length > 0 ) {
        const map = {};
        s.split("").map( (char, index) => {
            map[char] = map[char] || [index, index];
            map[char][1] = index;
        });
        // const 26 ^ 26
        const keys = Object.keys(map).sort( (a,b) => a > b ? 1 : -1 );
        // console.log( s, keys, map );
        // find the best first number
        // *** Can also use an array to record numbers, and then from pos 0-> N gradually remove, until cannot remove at all. *****
        let selected = s[0];
        if ( keys.length > 1 ) {
            for ( let i = 0 ;  i < keys.length ; i++ ) {
                let canBe = true;
                for ( let j = 0 ; j < keys.length ; j++ ) {
                    if ( map[keys[j]][1] < map[keys[i]][0] ) {
                        canBe = false;
                    }
                }
                if ( canBe ) {
                    selected = keys[i];
                    break;
                }
            }
        }
        // console.log("choose:", selected);
        res = res + selected;
        s = s.substr( s.indexOf(selected) ).split("").filter( item => item !== selected ).join("");
    }
    return res;
};

/** 
"cbacdcbc"
"bcabc"
"a"
""
"ba"
"baaaab"
*/