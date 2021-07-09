/**
1071. Greatest Common Divisor of Strings

For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
Example 4:

Input: str1 = "ABCDEF", str2 = "ABC"
Output: ""
 

Constraints:

1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 var gcdOfStrings = function(str1, str2) {
    
    if (  str1 + str2 === str2 + str1 ) {
        const helperGCM = ( num1, num2 ) => {
            let l = Math.max(num1, num2);
            let s = Math.min(num1, num2);
            if ( l % s === 0 ) return s;
            return helperGCM(s, l % s);
        }
        const gcm = helperGCM(str1.length, str2.length);
        // console.log()
        return str1.substr(0, gcm);
        
    }
    return "";
    
//     const helper = ( lStr, sStr ) => {
//         console.log("helper", lStr, sStr);
//         if ( lStr.length === sStr.length ) return lStr === sStr ? lStr : "";
        
//         let tempStr = str2;
//         while ( tempStr.length < lStr.length ) {
//             if (! lStr.startsWith(tempStr) ) return "";
//             tempStr += str2;
//         }
//         if (! tempStr.startsWith(lStr) ) return "";
        
//         if ( tempStr.length === lStr.length ) return sStr;
        
//         return helper( sStr, lStr.substr(0, Math.min(sStr.length, lStr.length - sStr.length)) );
//     }
    
//     return helper( str1.length > str2.length ? str1 : str2, 
//                  str1.length > str2.length ? str2 : str1, );
};


/**
"ABCABC"
"ABC"
"ABABAB"
"ABAB"
"LEET"
"CODE"
"ABCDEF"
"ABC"
 */