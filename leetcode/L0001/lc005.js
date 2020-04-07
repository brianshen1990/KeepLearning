
/*
Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
    let _helperCheck = function(s, i){
        // 1 aba,  2 aa, 0 ab
        if( (i+1) < s.length && s[i] === s[i+1]){
            return 2;
        }else if( ((i-1)>=0)  && (i+1<s.length) && s[i-1] === s[i+1]){
            return 1;
        }else{
            return 0;
        }
    }
    let _helperGetMaxABA = function(s, i){
        let len = 1;
        while( i-len>=0 && (i+len)<s.length ){
            if(s[i-len] === s[i+len]){
                len++;
            }else{
                break;
            }
        }
        return s.substring(i-len+1, i+len);
    }
    let _helperGetMaxAA = function(s, i){
        // ss
        let len = 0;
        while( i-len>=0 && (i+len+1)<s.length ){
            if(s[i-len] === s[i+len+1]){
                len++;
            }else{
                break;
            }
        }
        return s.substring(i-len+1, i+len+1);
    }
    let _helperGetMaxARepeat = function(s, i){
        //cbbd, cbbc
        // get repeat
        let rep = 0;
        let ret = "";
        while( (i+rep)<s.length ){
            if(s[i+rep] === s[i]){
                rep++;
            }else{
                break;
            }
        }
        if( rep%2 === 1 ){
            // baaa
            ret = _helperGetMaxABA(s, i + Math.floor(rep/2) );
        }else{
            ret = _helperGetMaxAA(s, i+ rep/2-1);
        }
        return [rep, ret];
    }

    if(s.length === 0){
        return "";
    }
    let ret = s[0];
    let i = 0;
    while(i<s.length){
        let palType = _helperCheck(s, i);
        if( palType===1){ // ABA
            let temp =  _helperGetMaxABA(s, i);
            if(temp.length > ret.length){
                ret = temp;
            }
            i++;
        }else if( palType===2 ){ // AA
            let temp = _helperGetMaxARepeat(s, i);
            let rep = temp[0];
            temp = temp[1];
            if(temp.length > ret.length){
                ret = temp;
            }
            i  = i + rep;
        }else{
            i++;
        }
    }
    return ret;
};

let test = function(){
    console.log(longestPalindrome("babad") === "bab");
    console.log(longestPalindrome("cbbd") === "bb");
    console.log(longestPalindrome("dbaba") === "bab" );
    console.log(longestPalindrome("12121212121") === "12121212121");
    console.log(longestPalindrome("111111111121111111111") === "111111111121111111111");
    console.log(longestPalindrome("111111111") ==="111111111");
    console.log(longestPalindrome("1") === "1");
    console.log(longestPalindrome("1221") === "1221");
    console.log(longestPalindrome("") === "");
    console.log(longestPalindrome("tattarrattat")==="tattarrattat");
}

test();
