/**
125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if ( !s ) {
        return true;
    }
    if (s.length === 0) {
        return true;
    }
    const Codea = 'a'.charCodeAt(0);
    const Codez = 'z'.charCodeAt(0);
    const CodeA = 'A'.charCodeAt(0);
    const CodeZ = 'Z'.charCodeAt(0);
    const Code0 = '0'.charCodeAt(0);
    const Code9 = '9'.charCodeAt(0);
    
    let newArr = [];
    for ( let i = 0; i< s.length ; i++ ) {
        let charCode = s[i].charCodeAt(0);
        if (  ( charCode >= Codea && charCode <= Codez )  || 
              ( charCode >= CodeA && charCode <= CodeZ )  || 
              ( charCode >= Code0 && charCode <= Code9 )
           ) {
            newArr.push(s[i]);
        }
    }
    s = newArr.join('').toLowerCase();
    let sReverse =  newArr.reverse().join('').toLowerCase();
    return s === sReverse;
};

/**
"A man, a plan, a canal: Panama"
"race a car"
""
"."
"a.b"
"1a2"
"1a1"
 */