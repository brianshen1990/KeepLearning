/*
32. Longest Valid Parentheses
Hard
1322
67


Given a string containing just the characters '(' and ')', 
find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
Accepted
156,898
Submissions
646,672

*/


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(!s){
        return 0;
    }
    
    let nums = [];
    let acc = 0;
    for(let i = s.length-1; i>=0; i-- ){
        if(s[i] === ")"){
            acc++;
        }
        nums.unshift(acc);
    }
    let ret = 0;
    for( let i = 0; i< s.length ; ){
        let newPos = i;
        if(s[i] === "("){
            let tempRet = 0;
            let realRet = 0;
            let sig = [];
            for(let j = i ; j< s.length; j++){
                if(s[j] === "("){
                    sig.push("(");
                    if( nums[j] < sig.length ){
                        newPos = i; 
                        break;
                    }
                }else{
                    if(sig.length === 0){
                        break;
                    }else{
                        sig.pop();
                        tempRet++;
                        if(sig.length === 0){
                            newPos = j;
                            realRet = tempRet;
                        }
                    }
                }
            }
            if( realRet > ret ){
                ret = realRet;
            }
        }
        i = newPos + 1;
    }
    return ret * 2;
};

let test = function () {
    console.log(longestValidParentheses("()(()") === 2);
    console.log(longestValidParentheses("(()") === 2);
    console.log(longestValidParentheses(")()())") === 4);

    console.log(longestValidParentheses(")()())(())(())()()") === 12);
    console.log(longestValidParentheses("(((((())))()()()()())))))))()(()()())))((()))))))))))))))))((((((((((((())()()())))))))") === 24);

    console.log(longestValidParentheses("((()()(()((()") === 4);
    
    
}
test();