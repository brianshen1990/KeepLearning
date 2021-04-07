/**

1641. Count Sorted Vowel Strings

Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

 

Example 1:

Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
Example 2:

Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
Example 3:

Input: n = 33
Output: 66045
 

Constraints:

1 <= n <= 50 

 */


/**
 * @param {number} n
 * @return {number}
 */
 var countVowelStrings = function(n) {
    const cache = {};

    const helper = ( arr, len ) => {
        if ( len === 0 || arr.length === 0 ) return 0;
        if ( arr.length === 1 ) return 1;
        if ( len === 1 ) return arr.length;
        
        const str = arr.join("") + len.toString();
        if ( str in cache ) {
            return cache[str];
        }
        let count = 1;// take all teh same
        const nextArr = arr.slice(1);
        for ( let i = 0 ; i < len ; i++ ) {
            count += helper( nextArr, len-i );
        }
        cache[str] = count;
        return count;
    }
    
    return helper( ["a", "e", "i", "o", "u"], n );
    
};


/**
1
2
9
10
33
42
50
*/