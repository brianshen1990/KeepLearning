/**

1593. Split a String Into the Max Number of Unique Substrings

Given a string s, return the maximum number of unique substrings that the given string can be split into.

You can split string s into any list of non-empty substrings, where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are unique.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "ababccc"
Output: 5
Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.
Example 2:

Input: s = "aba"
Output: 2
Explanation: One way to split maximally is ['a', 'ba'].
Example 3:

Input: s = "aa"
Output: 1
Explanation: It is impossible to split the string any further.
 

Constraints:

1 <= s.length <= 16

s contains only lower case English letters.

 */


/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {

    const helper = (str, unique) => {
        let ret = -1;
        if ( str.length === 0 ) {
            return 0;
        }
        
        for ( let i = 1 ; i <= str.length ; i++ ) {
            const tempStr = str.substr(0, i);
            if ( unique.has( tempStr ) ) continue;
            unique.add( tempStr );
            const num = helper( str.substr(i), unique );
            if ( num >= 0 ) {
                ret = Math.max( ret, num+1);
            }
            unique.delete( tempStr );
        }
        return ret;
    }
    
    const set = new Set();
    return helper( s, set );
    
};

/**
"ababccc"
"aba"
"aa"
"ababab"
"abababab"
 */