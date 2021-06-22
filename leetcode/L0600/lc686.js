/**
686. Repeated String Match

Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

Notice: string "abc" repeated 0 times is "",  repeated 1 time is "abc" and repeated 2 times is "abcabc".

 

Example 1:

Input: a = "abcd", b = "cdabcdab"
Output: 3
Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
Example 2:

Input: a = "a", b = "aa"
Output: 2
Example 3:

Input: a = "a", b = "a"
Output: 1
Example 4:

Input: a = "abc", b = "wxyz"
Output: -1
 

Constraints:

1 <= a.length <= 104
1 <= b.length <= 104
a and b consist of lower-case English letters.
 */


/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var repeatedStringMatch = function(a, b) {
    
    if ( a.length >= b.length ) {
        if ( a.indexOf(b) >= 0 ) return 1; // total includes
        if ( (a+a).indexOf(b) >= 0 ) return 2;// whether 2 times works
        return -1;
    }
    
    let index = b.indexOf(a);
    if ( index < 0 ) { 
        // conatin no repeated, so let's try repeat a
        if ( (a+a).indexOf(b) >= 0 ) return 2;
        return -1; 
    }
    let ret = 0;
    const preLeft = b.substr(0, index);
    if ( preLeft.length > 0 ) {
        // pre position handling
        if ( a.endsWith(preLeft) ) {
            ret += 1;
        } else {
            return -1;
        }
    }
    b = b.substr(index);
    while ( b.length >= a.length ) {
        // repeat a
        if ( b.startsWith(a) ) {
            ret++;
            b = b.substr(a.length);
        } else {
            return -1;
        }
    }
    // handle anything left
    if ( b.length > 0 ) {
        if ( a.startsWith(b) ) {
            ret += 1;
        } else {
            return -1;
        }
    }
    return ret;
};


/**
"abcd"
"cdabcdab"
"a"
"aa"
"a"
"a"
"abc"
"wxyz"
"abcdef"
"efab"
"a"
"b"
"abcd"
"bcdab"
*/