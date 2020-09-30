/**
917. Reverse Only Letters

Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Note:

S.length <= 100
33 <= S[i].ASCIIcode <= 122 
S doesn't contain \ or "

 */

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    const revLetter = S.split("").filter( item => ( item >= 'a' && item <= 'z' ) || ( item >= 'A' && item <= 'Z') ).reverse().join("");
    
    let index = 0;
    const ret = [];
    for ( let i = 0 ; i < S.length ; i++ ) {
        const item = S[i];
        if ( ( item >= 'a' && item <= 'z' ) || ( item >= 'A' && item <= 'Z')  ) {
            ret.push( revLetter[index++] );
        } else {
            ret.push( item );
        }
    }
    return ret.join("");
    
};


/**
"ab-cd"
"a-bC-dEf-ghIj"
"Test1ng-Leet=code-Q!"
 */