/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let arrFinal = [];
    let arrHash = {};
    let len = 0;
    for(let index = 0; index<s.length ; index++){
        keyValue = s[index];
        if(!arrHash[keyValue]){
            arrHash[keyValue] = true;
            arrFinal.push(keyValue);
            if( arrFinal.length>len ){
                len = arrFinal.length;
            }
        }else{
            while(arrHash[keyValue]){
                let ele = arrFinal.shift();
                delete arrHash[ele];
            }
            arrHash[keyValue] = true;
            arrFinal.push(keyValue);
        }
    };
    return len;
};

let test = function(){
    console.log(lengthOfLongestSubstring("abcabcbb")===3);
    console.log(lengthOfLongestSubstring("bbbbb")===1);
    console.log(lengthOfLongestSubstring("pwwkew")===3);
    console.log(lengthOfLongestSubstring("aab")===2);
    console.log(lengthOfLongestSubstring("")===0);
}
test();