/**

520. Detect Capital

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
 

Example 1:

Input: "USA"
Output: True
 

Example 2:

Input: "FlaG"
Output: False
 

Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

 */


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if ( word.length <= 0 )  return false;
    
    let Cap1 = ( word[0] >= 'A' && word[0] <= 'Z' );
    let CapNum = word.split("").filter( item => item >= 'A' && item <= 'Z' ).length;
    
    if ( Cap1 ) {
        return CapNum === word.length || CapNum === 1;
    } else {
        return CapNum === 0;
    }
};


/**
"USA"
"Google"
"leetcode"
"FlaG"
"F"
"f"
"fL"
"Fl"
 */