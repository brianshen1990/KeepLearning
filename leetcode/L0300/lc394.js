/**
394. Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
Example 4:

Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"

 */


/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    const helper = (str) => {
        let ret = "";
        let i = 0;
        while ( i < str.length ) {
            if ( str[i] >= "1" && str[i] <= "9" ) {
                let index = i;
                // get repeat times
                let nextStr = "";
                while ( str[index] !== '[' ) {
                    nextStr += str[index];
                    index++;
                }
                const times = parseInt(nextStr);
                
                // get nested repeat
                nextStr = "";
                index++;
                let stack = 1;
                while ( true ) {
                    if ( str[index] === ']' && stack === 1 ) {
                        break;
                    } else {
                        nextStr += str[index];
                        if ( str[index] === "[" ) {
                            stack++;
                        } 
                        if ( str[index] === "]" ) {
                            stack--;
                        } 
                        index++;
                    }
                }
                // console.log( "hit number: ", i, times, nextStr, index, index + 1 );
                const nested = helper( nextStr );
                ret += new Array( times ).fill( nested ).join("");
                
                // next position
                i = index + 1;
            } else {
                ret += str[i];
                i = i+1;
            }
        }
        // console.log(str, ret);
        return ret;
    }
    
    return helper(s);
    
    
};


/** 
"a"
"abc"
"3[a]"
"3[a]2[bc]"
"3[a2[c]]"
"2[abc]3[cd]ef"
"abc3[cd]xyz"
*/
