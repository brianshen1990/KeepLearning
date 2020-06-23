/**
345. Reverse Vowels of a String

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".
 */



/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    let indexes = [];
    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( "aeiouAEIOU".indexOf( s[i] ) >= 0 ) {
            indexes.push(i);
        }
    }
    // console.log(indexes);
    
    let beg = 0; 
    let end = indexes.length-1;
    let ret = s.split("");
    // console.log(ret);
    while ( beg < end ) {
        let temp = ret[ indexes[beg] ];
        ret[ indexes[beg] ] = ret[ indexes[end] ];
        ret[ indexes[end] ] = temp;
        beg++;
        end--;
    }
    return ret.join("");
};


/** 
"hello"
"leetcode"
"asdqwqwdwqdwqwd"
""
"as"
"wqwqd"
"aA"
*/