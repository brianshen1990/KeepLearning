/**

1616. Split Two Strings to Make Palindrome

You are given two strings a and b of the same length. Choose an index and split both strings at the same index, splitting a into two strings: aprefix and asuffix where a = aprefix + asuffix, and splitting b into two strings: bprefix and bsuffix where b = bprefix + bsuffix. Check if aprefix + bsuffix or bprefix + asuffix forms a palindrome.

When you split a string s into sprefix and ssuffix, either ssuffix or sprefix is allowed to be empty. For example, if s = "abc", then "" + "abc", "a" + "bc", "ab" + "c" , and "abc" + "" are valid splits.

Return true if it is possible to form a palindrome string, otherwise return false.

Notice that x + y denotes the concatenation of strings x and y.

 

Example 1:

Input: a = "x", b = "y"
Output: true
Explaination: If either a or b are palindromes the answer is true since you can split in the following way:
aprefix = "", asuffix = "x"
bprefix = "", bsuffix = "y"
Then, aprefix + bsuffix = "" + "y" = "y", which is a palindrome.
Example 2:

Input: a = "abdef", b = "fecab"
Output: true
Example 3:

Input: a = "ulacfd", b = "jizalu"
Output: true
Explaination: Split them at index 3:
aprefix = "ula", asuffix = "cfd"
bprefix = "jiz", bsuffix = "alu"
Then, aprefix + bsuffix = "ula" + "alu" = "ulaalu", which is a palindrome.
Example 4:

Input: a = "xbdef", b = "xecab"
Output: false
 

Constraints:

1 <= a.length, b.length <= 105
a.length == b.length
a and b consist of lowercase English letters
 */


/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
    const pal = (str) => {
        return str.split("").reverse().join("") === str;
    }
    if ( pal(a) || pal(b) ) {
        return true;
    } 
    // need combine 
    // a pre + b suff
    let beg = 0 ; 
    let end = b.length-1;
    while ( beg < end ) {
        if ( a[beg] === b[end] ) {
            beg++;
            end--;
        } else {
            // can take all a beg or take all b end
            // console.log( "a pre + b suff" )
            if ( pal( a.substring(beg, end+1) ) || pal( b.substring( beg, end+1 ) ) ) {
                return true;
            } else {
                break;
            }
        }
    }
    if ( beg >= end ) {
        return true;
    }
    
    // b pre + a suff 
    beg = 0;
    end = b.length-1;
    while ( beg < end ) {
        if ( a[end] === b[beg] ) {
            beg++;
            end--;
        } else {
            // can take all a beg or take all b end
            // console.log( "b pre + a suff" )
            if ( pal( a.substring(beg, end+1) ) || pal( b.substring( beg, end+1 ) ) ) {
                return true;
            } else {
                break;
            }
        }
    }
    if ( a[beg] === b[end] || beg + 1 === end) {
        return true;
    }
    if ( beg >= end ) {
        return true;
    }

    return false;
    
};


/**
"x"
"y"
"abdef"
"fecab"
"ulacfd"
"jizalu"
"xbdef"
"xecab"

*/