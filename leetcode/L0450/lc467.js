/**

467. Unique Substrings in Wraparound String

Consider the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so s will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

Now we have another string p. Your job is to find out how many unique non-empty substrings of p are present in s. In particular, your input is the string p and you need to output the number of different non-empty substrings of p in the string s.

Note: p consists of only lowercase English letters and the size of p might be over 10000.

Example 1:
Input: "a"
Output: 1

Explanation: Only the substring "a" of string "a" is in the string s.
Example 2:
Input: "cac"
Output: 2
Explanation: There are two substrings "a", "c" of string "cac" in the string s.
Example 3:
Input: "zab"
Output: 6
Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.
 */


/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    let beg = 0 ;
    const cache = {};
    
    while ( beg < p.length ) {
        let next = beg + 1;
        while ( next < p.length ) {
            if ( p[next].charCodeAt(0) - p[next-1].charCodeAt(0) === 1 ||
              (p[next] === 'a' && p[next-1]==='z' )) {
                next++;
                continue;
            } 
            break;
        }
        for ( let i = beg ;i < next ; i++ ) {
            cache[ p[i] ] = cache[ p[i] ] || 0;
            cache[ p[i] ] = Math.max( cache[ p[i] ], next - i  );
        }
        
        beg = next;
    }
    let ret = 0 ;
    Object.values(cache).forEach( item => ret += item );
    
    return ret;
};

/**
""
"ca"
"a"
"cac"
"zab"
"zabcdefghijklmznopqrstuvwxyz"
"zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd"
 */