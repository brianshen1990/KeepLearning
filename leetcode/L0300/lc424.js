/**

424. Longest Repeating Character Replacement

Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:

Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.
 

Example 2:

Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 */


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if ( k >= s.length-1 ) {
        return s.length;
    }
    
    let arr = new Array(26).fill(0); 
    const aNum = 'A'.charCodeAt(0);
    if ( k === 0 ) {
        let max = 1;
        let index = 0;
        while ( index < s.length ) {
            if ( index < s.length && s[index+1] === s[index] ) {
                let next = index+1;
                while ( next < s.length && s[next] === s[index] ) {
                    next++;
                }
                max = Math.max( next-index, max );
                index = next;
            } else {
                index++;
            }
        }
        return max;
    }
    
    for ( let i = 0 ; i < k-1 ; i++ ) {
        arr[ s[i].charCodeAt(0) - aNum ] += 1;
    };
    
    let fir = 0 ;
    let sec = k-1;
    let ret = sec - fir;
    while ( sec < s.length ) {
        arr[ s[sec].charCodeAt(0) - aNum ] +=1;
        // console.log( arr.join(",") )
        let max = Math.max(...arr);
        if ( (max + k) >= (sec-fir+1) ) {
            if ( sec-fir+1  > ret ) {
                ret = sec-fir+1;
                // console.log("hit", fir, sec, max, arr.join(","))
            }
            sec++;
        } else {
            sec++;
            arr[ s[fir].charCodeAt(0) - aNum ] -= 1;
            fir++;
        }
    }
    return ret;  
};


/** 
"ABAB"
2
"AABABBA"
1
"AABAABA"
1
"AABAABA"
4
"AABAABACDABBSA"
4
"AABAA"
4
"ABCD"
4
"ABCDABCD"
4
"ABCDABCD"
1
"AAAA"
1
*/