/**
87. Scramble String

Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.

Example 1:

Input: s1 = "great", s2 = "rgeat"
Output: true
Example 2:

Input: s1 = "abcde", s2 = "caebd"
Output: false

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScrambleStackError = function(s1, s2) {
    if( s1.length !== s2.length ) {
        return false;
    }
    let stack = [];
    let index = 0;
    let i = 0;
    while( i < s2.length && index < s2.length ) {
        let ch = s2[i];
        if( s1[index] === ch ) {
            index++;
            i++;
        } else {
            if ( stack.length > 0 && stack[ stack.length - 1 ] === ch ) {
                stack.pop();
                i++;
            } else {                
                stack.push( s1[index] );
                index++;
            }
        }
    }
    if( i === s2.length  ) {
        return true;
    }
    let notFound = false;
    while( i < s2.length ) {
        let ch = s2[i];
        if( index < s2.length && s2[index] === ch ) {
            i++;
            index++;
        }  else if( stack.length > 0 && stack[ stack.length - 1 ] === ch ) {
            stack.pop();
            i++;
        } else {
            break;
        }
    }
    
    if( i === s2.length  ) {
        return true;
    }
    
    return false
};




console.log( isScramble( "great", "rgtae" ) === true );
console.log( isScramble( "great", "rgeat" ) === true );
console.log( isScramble("abcde", "caebd" ) === false );