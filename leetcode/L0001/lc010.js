/*

Given an input string (s) and a pattern (p), 
implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 
'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. 
Therefore it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function(s, p) {
    
    let helperMatch = function(s, p){ // not greedy
        if(s===p){ // special handle 
            return true;
        }
        if(p.length === 0){
            if(s.length !=0){
                return false;
            }
        }else if(p.length === 1){
            if(s.length === 1 && (p[0] === '.' || s[0] === p[0]) ){
                return true;
            }
        }else{ // p len > 1
            if(p[1] !== '*'){
                if( s.length >= 1 && ( p[0] === '.' || s[0] === p[0] ) ){
                    return helperMatch(s.substring(1), p.substring(1));
                }
            }else { // p1 === *
                if(p[0] !== '.'){ // a*
                    if(s.length === 0){
                        return helperMatch(s, p.substring(2));
                    }else if(s[0] !== p[0]){ // p jump 2
                        return helperMatch(s, p.substring(2));
                    }else{ // hard Q => aa a*a*a*
                        if(helperMatch(s, p.substring(2))){ // none match
                            return true;
                        }else{ // match at least once
                            let ret = false;
                            let index = 0;
                            while( index < s.length && s[index] ===  p[0]){
                                if(helperMatch(s.substring(index+1), p.substring(2))){
                                    ret = true;
                                    break;
                                }
                                index++;
                            }
                            if(ret){
                                return ret;
                            }
                        }
                    }
                }else{ //  || .*
                    if(s.length === 0){
                        return helperMatch(s, p.substring(2));
                    }else if(p.length === 2){
                        return true;
                    }else{ // .*sdsa 
                        let ret = false;
                        let index = 0;
                        while(index <= s.length){
                            if(helperMatch(s.substring(index), p.substring(2))){
                                ret = true;
                                break;
                            }
                            index++;
                        }
                        if(ret){
                            return ret;
                        }
                    }
                }
            }
        }
        return false;
    }
    return helperMatch(s, p);
};

let test = function(){

    console.log('aa'.substring(0));
    console.log('aa'.substring(1));
    console.log('aa'.substring(2));
    console.log(isMatch('aa', "a") === false);
    console.log(isMatch("abcdefg", "abcdefg") === true);
    console.log(isMatch("aa", "a*") === true);
    console.log(isMatch("ab", ".*") === true);
    console.log(isMatch("ab", ".*.*") === true);
    console.log(isMatch("ab", ".*ab.*") === true);
    console.log(isMatch("ab", ".*abb.*") === false);
    console.log(isMatch("ab", "a.*.*") === true);
    console.log(isMatch("ab", "a.*b.*") === true);
    console.log(isMatch("aab", "c*a*b") === true);
    console.log(isMatch("aa", "a*aa") === true);
    console.log(isMatch("aa", "a*a*a*") === true);
    console.log(isMatch("mississippi", "mis*is*p*.") === false);
    console.log(isMatch("a", ".*..a*") === false);
    console.log(isMatch("aabcbcbcaccbcaabc", ".*a*aa*.*b*.c*.*a*") === true);
    console.log(isMatch("abcaaaaaaabaabcabac", ".*ab.a.*a*a*.*b*b*") === true);
    console.log(isMatch("abcaaaaaaabaabcabac", ".*abda.*a*a*.*b*b*") === false);
    console.log(isMatch("aaa", "ab*a*c*a") === true);
}
test();