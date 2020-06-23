/**
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 */



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let temp = "";
    const middle = Math.floor( s.length / 2 );
    for ( let i = 0 ; i < middle ; i++ ) {
        temp = s[i];
        s[i] = s[s.length-1-i];
        s[s.length-1-i] = temp;
    }
};


/** 
["h","e","l","l","o"]
["H","a","n","n","a","h"]
[]
["H"]
["H", "a"]
["H", "a", "n"]
*/