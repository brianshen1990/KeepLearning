/**
1147. Longest Chunked Palindrome Decomposition

You are given a string text. You should split it to k substrings (subtext1, subtext2, ..., subtextk) such that:

subtexti is a non-empty string.
The concatenation of all the substrings is equal to text (i.e., subtext1 + subtext2 + ... + subtextk == text).
subtexti == subtextk - i + 1 for all valid values of i (i.e., 1 <= i <= k).
Return the largest possible value of k.

 

Example 1:

Input: text = "ghiabcdefhelloadamhelloabcdefghi"
Output: 7
Explanation: We can split the string on "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)".
Example 2:

Input: text = "merchant"
Output: 1
Explanation: We can split the string on "(merchant)".
Example 3:

Input: text = "antaprezatepzapreanta"
Output: 11
Explanation: We can split the string on "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)".
Example 4:

Input: text = "aaa"
Output: 3
Explanation: We can split the string on "(a)(a)(a)".
 

Constraints:

1 <= text.length <= 1000
text consists only of lowercase English characters.
 */


/**
 * @param {string} text
 * @return {number}
 */
 var longestDecomposition = function(text) {
    let ret = 0;
    
    while ( text.length > 0 ) {
        // console.log("----",  text, ret );
        if ( text.length === 1 ) {
            ret += 1;
            break;
        }
        
        let found = false;
        for ( let i = text.length-1 ; i > 0 ; i-- ) {
            if ( text[i] === text[0] && 
                 text.substr(i) === text.substr(0, text.length-i) ) {
                found = true;
                text = text.substring(i, text.length-i);
                break;
            }
        }
        
        if ( found ) {
            ret += 2;
        } else {
            ret += 1;
            break;
        }
    }
    return ret;
};


/**
"ghiabcdefhelloadamhelloabcdefghi"
"merchant"
"antaprezatepzapreanta"
"aaaa"
"aaa"
"aa"
"a"
"abcd"
"ghiabcdefhelloaahelloabcdefghi"
"vwsuvmbwknmnvwsuvmbwk"
 */