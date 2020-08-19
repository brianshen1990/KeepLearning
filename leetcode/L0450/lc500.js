/**

500. Keyboard Row

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

 



 
Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
 

Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

 */


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const mapping = {};
    "qwertyuiop".split("").map( item => {
        mapping[item] = 1;
        mapping[item.toUpperCase()] = 1;
    });
    "asdfghjkl".split("").map( item => {
        mapping[item] = 2;
        mapping[item.toUpperCase()] = 2;
    });
    "zxcvbnm".split("").map( item => {
        mapping[item] = 3;
        mapping[item.toUpperCase()] = 3;
    });
    
    return words.filter( item => {
        const row = mapping[item[0]];
        for ( let i = 1 ; i < item.length ; i++ ) {
            if ( mapping[item[i]] !== row ) {
                return false;
            }
        }
        return true;
    });
};

/**
["Hello","Alaska","Dad","Peace", "Qwe","qwe", ""]
 */