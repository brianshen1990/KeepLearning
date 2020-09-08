/**
1190. Reverse Substrings Between Each Pair of Parentheses

You are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 

Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
Example 4:

Input: s = "a(bcdefghijkl(mno)p)q"
Output: "apmnolkjihgfedcbq"
 

Constraints:

0 <= s.length <= 2000
s only contains lower case English characters and parentheses.
It's guaranteed that all parentheses are balanced.

 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    
  const helper = (str, times) => {
      
      let stack = [];
      let stackIndice = [];
      let index = 0;
      while ( index < str.length ) {
          if ( str[index] === "(" ) {
              let opStack = [];
              opStack.push(index);
              let nextIndex = index+1;
              while ( opStack.length > 0 ) {
                  if ( str[nextIndex] === "(" ) {
                      opStack.push(nextIndex);
                  } else if ( str[nextIndex] === ")" ) {
                      opStack.pop();
                  }
                  nextIndex++;
              }
              stack.push( helper( str.substring(index+1, nextIndex-1), times+1 ) );
              index = nextIndex;
          } else {
              let nextIndex = index+1; 
              while ( nextIndex < str.length && str[nextIndex] !== "(" ) {
                  nextIndex++;
              }
              stack.push( str.substring( index, nextIndex ) );
              stackIndice.push( stack.length-1 );
              index = nextIndex;
          }
      }
      if ( times % 2 === 1 ) {
          for ( let i = 0 ; i < stackIndice.length ; i++ ) {
              stack[stackIndice[i]] = stack[stackIndice[i]].split("").reverse().join("");
          } 
      }
      if ( times % 2 === 1 ) {
          return stack.reverse().join("");
      } else {
          return stack.join("");
      }
  }
  
  return helper( s, 0 );
};


/**
"(abcd)"
"(u(love)i)"
"(ed(et(oc))el)"
"a(bcdefghijkl(mno)p)q"
"abcd"
"ta()usw((((a))))"
"ta()usw((((a))))"
"(ta()usw((((a)))))"
 */