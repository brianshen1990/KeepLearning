/**
139. Word Break
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // pre handle
    const wordMapping = {};
    let minLen = Number.MAX_VALUE;
    let maxLen = Number.MIN_VALUE;;
    wordDict.map( item => {
        wordMapping[item] = true;
        minLen = Math.min( minLen, item.length );
        maxLen = Math.max( maxLen, item.length );
    });
    
    // init & helper
    const seq = new Array(s.length+1).fill(false);
    seq[0] = true;
    // console.log(wordMapping, minLen, maxLen);
    
    // go DP
    for ( let i = 0; i < s.length ; i++ ) {
        let possible = false;
        for ( let j = 0; j <= i ; j++ ) {
            const curLen = (i+1-j);
            if (seq[j] && curLen <= maxLen && curLen >= minLen ) {
                // with word dict len 
                // console.log(  s.substr(j, curLen)  );
                if ( wordMapping[s.substr(j, curLen)] ) {
                    possible = true;
                    break;
                }
            }
        }
        seq[i+1] = possible;
    }
    // console.log(seq);
    
    // res
    return seq[s.length];
};

/**
"a"
["a"]
"leetcode"
["leet","code"]
"applepenapple"
["apple", "pen"]
"catsandog"
["cats", "dog", "sand", "and", "cat"]
 */