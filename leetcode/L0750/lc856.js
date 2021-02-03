/**

856. Score of Parentheses

Given a balanced parentheses string S, compute the score of the string based on the following rule:

() has score 1
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 

Example 1:

Input: "()"
Output: 1
Example 2:

Input: "(())"
Output: 2
Example 3:

Input: "()()"
Output: 2
Example 4:

Input: "(()(()))"
Output: 6
 

Note:

S is a balanced parentheses string, containing only ( and ).
2 <= S.length <= 50
*/

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    
    const helper = (str) => {        
        let prev = 0 ;
        let val = 0;
        let ret = 0;
        for ( let i = 0 ; i < str.length ; i++ ) {
            if ( str[i] === '(' ) {
                val++;
            } else {
                val--;
            }
            if ( val === 0 ) {
                // console.log("hit",  prev, i, ret );
                if ( i === prev+1 ) {
                    ret += 1;
                } else {
                    ret +=  2 * helper( str.substring(prev+1, i) );
                }
                prev = i+1;
                // console.log("end",  prev, i, ret );
            }
        }
        return ret;
    }
    
    return helper(S);
    
};

/**
"(()(()))"
"((()(())))"
"((()(())))(()(()))"
"()"
"(())"
"()()"
  */