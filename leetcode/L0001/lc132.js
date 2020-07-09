/**
132. Palindrome Partitioning II

Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

Example:

Input: "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.

 */

// seq[i] meas, best cut till now
// meet axxxyxxxb, set b to a+1
// meet axxccxxb, set b to a+1

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(str) {
    if ( str.length <= 1 ) {
        return 0;
    }
    
    // init
    const seq = new Array(str.length).fill(0).map( (_, index) => index );
    // console.log( seq.join(",") );
    
    // go dp
    for ( let i = 0; i < str.length ; i++ ) {
        // odd
        for ( let radius = 0 ; i+radius < str.length && i-radius >=0 && str[i+radius] === str[i-radius] ; radius++ ) {
            const end = (i-radius-1) >= 0 ? (seq[i-radius-1]+1) : 0;
            seq[i+radius] = Math.min( seq[i+radius], end);
        }
        // console.log(i, "odd", seq.join(","))
        
        // even
        for ( let radius = 1; i+radius < str.length && i-radius+1 >=0 && str[i+radius] === str[i-radius+1] ; radius++ )         {
            const end = i - radius >= 0 ? (seq[i-radius]+1) : 0;
            seq[i+radius] = Math.min( seq[i+radius], end);
        }
        // console.log(i, "even", seq.join(","))
    }
    
    // res
    // console.log(seq.join(","));
    return seq[seq.length-1];

};



/**
"cdd"
"aab"
"aacecaaa"
""
"a"
"ab"
"aba"
"abbac"
"qwqwkwq"
"adasdqwdjiqwdqwqwkwq"
"fifgbeajcacehiicccfecbfhhgfiiecdcjjffbghdidbhbdbfbfjccgbbdcjheccfbhafehieabbdfeigbiaggchaeghaijfbjhi"
"apjesgpsxoeiokmqmfgvjslcjukbqxpsobyhjpbgdfruqdkeiszrlmtwgfxyfostpqczidfljwfbbrflkgdvtytbgqalguewnhvvmcgxboycffopmtmhtfizxkmeftcucxpobxmelmjtuzigsxnncxpaibgpuijwhankxbplpyejxmrrjgeoevqozwdtgospohznkoyzocjlracchjqnggbfeebmuvbicbvmpuleywrpzwsihivnrwtxcukwplgtobhgxukwrdlszfaiqxwjvrgxnsveedxseeyeykarqnjrtlaliyudpacctzizcftjlunlgnfwcqqxcqikocqffsjyurzwysfjmswvhbrmshjuzsgpwyubtfbnwajuvrfhlccvfwhxfqthkcwhatktymgxostjlztwdxritygbrbibdgkezvzajizxasjnrcjwzdfvdnwwqeyumkamhzoqhnqjfzwzbixclcxqrtniznemxeahfozp"
 */