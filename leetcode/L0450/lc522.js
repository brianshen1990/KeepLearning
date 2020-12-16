/**

522. Longest Uncommon Subsequence II

Given a list of strings, you need to find the longest uncommon subsequence among them. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

Example 1:
Input: "aba", "cdc", "eae"
Output: 3
Note:

All the given strings' lengths will not exceed 10.
The length of the given list will be in the range of [2, 50].
 */



/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    
    const cache = {};
    strs.forEach( item => {
        cache[item.length] = cache[item.length] || {};
        cache[item.length][item] = cache[item.length][item] || 0;
        cache[item.length][item]++;
    })

    const common = (str1, str2) => {
        let index2 = 0;
        let index1 = 0;
        while ( index1 < str1.length && index2 < str2.length ) {
            if ( str1[index1] === str2[index2] ) {
                index1++;
                index2++;
            } else {
                index1++;
            }
        }
        return index2 === str2.length;
    }

    const alreadyNot = [];
    for ( let i = 10 ; i > 0 ; i-- ) {
        if ( cache[i] ) {
            for ( let item of Object.keys( cache[i] ) ) {
                if ( cache[i][item] === 1 ) {
                    let found = false;
                    for ( let j = 0 ; j < alreadyNot.length ; j++ ) {
                        if ( common( alreadyNot[j], item ) ) {
                            found = true; 
                            break;
                        }
                    }
                    if ( !found ) {
                        return i;
                    }
                } else {
                    alreadyNot.push(item);
                }
            }
        }
    }
    return -1;
    
};


/**
["aba","cdc","eae"]
["aba","cdc","cdc"]
["cdc","cdc","cdc"]
["cdc","cdc","cd"]
["cdc","cdc","c"]
["aba","cdc","cdasdwddc"]
["aabbcc", "aabbcc","cb","abc"]
 */