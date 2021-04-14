/**
678. Valid Parenthesis String

Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "(*)"
Output: true
Example 3:

Input: s = "(*))"
Output: true
 

Constraints:

1 <= s.length <= 100
s[i] is '(', ')' or '*'.
 */


/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
    let options = [0];
    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( s[i] === "(" ) {
            options = options.map( item => item + 1 );
        } else if ( s[i] === ")" ) {
            options = options.filter( item => item > 0 ).map( item => item - 1 );
            if ( options.length === 0 ) return false;
        } else {
            // * 
            const set = new Set(options);
            options = [...new Set(options.map( item => [item, item +1, item -1] ).flat().filter( item => item >= 0 ))];
        }
        // console.log( options )
    }
    return new Set(options).has(0);
    
};

/**
"()"
"(*)"
"(*))"
"(**))"
"(*)))"
"*)"
")("
"*"
"("
")"
"(((((())))***((((((()))))))))"
*/