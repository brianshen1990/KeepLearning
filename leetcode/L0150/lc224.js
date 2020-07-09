/**
224. Basic Calculator

Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

Example 1:

Input: "1 + 1"
Output: 2
Example 2:

Input: " 2-1 + 2 "
Output: 3
Example 3:

Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.

 */


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.split("").filter( item => item !== " " ).join("");
    console.log(s);

    const helper = (str) => {
        // console.log( "handling : ", str );
        
        let index = 0;
        let ret = 0;
        let operator = 1; // 1:+ | -1:- 
        while ( index < str.length ) {
            
            if ( str[index] === "(" ) { // high priority
                
                let stack = 1;
                let endIndex = index+1;
                while ( endIndex < str.length ) {
                    if ( str[endIndex] === ")" ) { 
                        if (stack === 1 ) {
                            break;
                        } else {
                            stack--;
                        }
                    } else if ( str[endIndex] === "(" )  {
                        stack++;
                    }
                    endIndex++;
                }
                
                const nestedRes = helper( str.substr(index+1, endIndex-index-1) );
                if ( operator === 1 ) {
                    ret = ret + nestedRes;
                } else {
                    ret = ret - nestedRes;
                }
                // console.log("hit (", str.substr(index+1, endIndex-index-1), "nested", nestedRes, "cacled", ret );
                index = endIndex+1;
            } 
            else if (str[index] === "+" || str[index] === "-") { // operator
                // console.log("hit operator", str[index]);
                operator = str[index] === '+' ? 1 : -1 ;
                index++;
            } 
            else { // number , take as much as we can 
                let endIndex = index+1;
                while ( endIndex < str.length && str[endIndex] >= "0" && str[endIndex] <= "9" ) {
                    endIndex++;
                }
                const num = parseInt( str.substr(index, endIndex-index) );
                if ( operator === 1 ) {
                    ret = ret + num;
                } else {
                    ret = ret - num;
                }
                // console.log("hit number ", str.substr(index, endIndex-index), "cacled", ret );
                index = endIndex;
            }
        }
        return ret;
    }
    
    return helper( s );
};

/**

"(1+(4+5+2)-3)+(6+8)"
"1 + 1"
" 2-1 + 2 "

*/