/*
824. Goat Latin

A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin. 

 

Example 1:

Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
Example 2:

Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 

Notes:

S contains only uppercase, lowercase and spaces. Exactly one space between each word.
1 <= S.length <= 150.
*/


/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    const Vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    return S.split(" ").map( item => {
        if ( Vowels.has(item[0]) ) {
            item = `${item}ma`;
        } else {
            item = `${item.substr(1)}${item[0]}ma`;
        }
        return item;
    }).map( (item, index) => {
           return `${item}${new Array(index+1).fill("a").join("")}`;
    }).join(" ");
    
};


/*

"I speak Goat Latin"
"The quick brown fox jumped over the lazy dog"
"Each word consists of lowercase and uppercase letters only"

*/
