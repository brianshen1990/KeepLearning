/**
140. Word Break II

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
 */


// recursive DP Done
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
    // console.log( minLen, maxLen, wordMapping );
    
    // init cache
    const cacheMapping = {};
    
    // recruisive DP 
    const helper = (_s) => {
        if ( cacheMapping[_s] ) {
            return cacheMapping[_s];
        }        
        const max = Math.min(maxLen, _s.length);
        const res = [];
        // console.log("dealing with :",  _s );
        for ( let i = minLen; i <= max ; i++) {
            let tempWord = _s.substr( _s.length - i, i);
            // console.log( tempWord );
            if (wordMapping[tempWord]) {
                
                if ( _s.length - i > 0 ) {  
                    const futureRes = helper(_s.substr(0, _s.length - i));
                    futureRes.map( item => {
                        res.push(item.concat([tempWord]) );
                        // console.log(1, res)
                    })
                } else {
                    res.push([tempWord]);
                    // console.log(0, res)
                }
            }
        }
        cacheMapping[_s] = res;
        return res;
    }
    
    const res = helper(s);
    return res.map( item => item.join(" ") );
};



/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreakPermutationOverTime = function(s, wordDict) {
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
    const ret = [];
    const helper = ( _ret, _s, _path ) => {
        if (!_s) {
            _ret.push( _path.join(" ") );
            return;
        }
        
        for ( let i = minLen; i <= maxLen ; i++ ) {
            if ( _s.length >= i ) {
                const tryWord = _s.substr(0, i);
                // console.log(`_s: ${_s} tryword ${i}: ${tryWord}`)
                if ( wordMapping[tryWord] ) {
                    // possible 
                    // console.log(`tryword Success: ${_s.substr(i)}`)
                    _path.push(tryWord);
                    helper(_ret, _s.substr(i), _path)
                    _path.pop();
                }
            }
        }
    } 
    
    // permutation
    helper( ret, s, []);
    
    // res 
    return ret;
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreakDPAllocateFail = function(s, wordDict) {
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
    const seqCache = new Array(s.length+1)
    seq[0] = true;
    for (let i = 0; i <= s.length; i++) {
        seqCache[i] = [];
    }
    seqCache[0] = [""];
    // console.log(wordMapping, minLen, maxLen);
    
    // go DP
    for ( let i = 0; i < s.length ; i++ ) {
        let possible = false;
        const tempCbm = [];
        
        for ( let j = 0; j <= i ; j++ ) {
            const curLen = (i+1-j);
            if (seq[j] && curLen <= maxLen && curLen >= minLen ) {
                const tempWord = s.substr(j, curLen);
                if ( wordMapping[tempWord] ) {
                    possible = true;
                    seqCache[j].map( item => {
                        const itemCopy = [...item];
                        itemCopy.push(tempWord);
                        tempCbm.push(itemCopy);
                    })
                }
            }
            if ( curLen < minLen ) {
                seqCache[j] = [];
            }
        }
        seq[i+1] = possible;
        seqCache[i+1] = tempCbm;
    }
    // console.log(seq);
    
    // res
    const ret = [];
    seqCache[s.length].map( item => {
        ret.push(item.join(" "))
    })
    return ret;
};


/**
"catsanddog"
["cat","cats","and","sand","dog"]
"pineapplepenapple"
["apple", "pen", "applepen", "pine", "pineapple"]
"catsandog"
["cats", "dog", "sand", "and", "cat"]
"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
 */


