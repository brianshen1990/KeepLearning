/**

524. Longest Word in Dictionary through Deleting

Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output: 
"apple"
Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]

Output: 
"a"
Note:
All the strings in the input will only contain lower-case letters.
The size of the dictionary won't exceed 1,000.
The length of all the strings in the input won't exceed 1,000.
 */



/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    // Sort
    // N * DP
    d = d.filter(item => s.length >= item.length ).sort( (a,b) => {
        if (b.length > a.length){
            return 1;
        }
        if ( a.length > b.length ) {
            return -1;
        }
        return b > a ? -1 : 1;
    });
    // console.log(d);
    
    for( let i = 0 ; i < d.length ; i++ ) {
        let match = 0 ;
        for ( let j = 0; j < s.length ; j++ ) {
            if ( s[j] === d[i][match] ) {
                match++;
                if ( match === d[i].length ) {
                    return d[i];
                }
            }
        }
    }
    return "";
    
};


/**
"abpcplea"
["ale","apple","monkey","plea"]
"abpcplea"
["a","b","c"]
"abpcplea"
["aiiiw"]
"bab"
["ba","ab","a","b"]
 */