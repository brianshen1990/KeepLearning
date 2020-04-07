/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return "";
    }
    if(strs.length === 1){
        return strs[0];
    }

    let ret = "";
    for(let len=0 ; len < strs[0].length ; len++){
        let consist = true;
        for(let i = 0; i<strs.length ;i++){
            if( len<strs[i].length && strs[i][len]===strs[0][len] ){
                continue;
            } else{
                consist = false;
                break;
            } 
        }
        if(!consist){
            break;
        }else{
            ret += strs[0][len];
        }
    }
    return ret;
};

let test = function(){
    console.log(longestCommonPrefix(["flower","flow","flight"]) === "fl");
    console.log(longestCommonPrefix(["dog","racecar","car"]) === "");
    console.log(longestCommonPrefix(["dog","dog","dog"]) === "dog");
    console.log(longestCommonPrefix(["","dog","dog"]) === "");
    console.log(longestCommonPrefix([]) === "");
    console.log(longestCommonPrefix(["sss"]) === "sss");
    console.log(longestCommonPrefix(["abca","abc"]) === "abc");
}
test();