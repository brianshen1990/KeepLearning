/**
306. Additive Number

Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

 

Example 1:

Input: "112358"
Output: true
Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
             1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
Example 2:

Input: "199100199"
Output: true
Explanation: The additive sequence is: 1, 99, 100, 199. 
             1 + 99 = 100, 99 + 100 = 199
 

Constraints:

num consists only of digits '0'-'9'.
1 <= num.length <= 35
Follow up:
How would you handle overflow for very large input integers?

 */


/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    
    const helper = (str, arr, arrStr) => {
        // console.log(str, arr, arrStr);
        // break condition        
        let validate = false;
        if ( arr.length >= 3 ) {
            validate = ( arr[arr.length-1] === ( arr[arr.length-2] + arr[arr.length-3] ) );
            if ( !validate ) {
                return false;
            }
            if ( validate && str === "" ) {
                console.log( "hit", arr );
                return true;
            } 
        }
        
        // permutation
        let minLen = 1;
        if ( arrStr.length > 2 ) {
            minLen = arrStr[ arrStr.length - 1 ].length;
        }
        let ret = false;
        
        for ( let i = minLen ; i <= str.length ; i++ ) {
            let tempStr = str.substr(0, i);
            // handle 0 leading
            if ( tempStr && tempStr.length > 1 && tempStr[0] === '0' ) {
                continue;
            }
            let tempInt = parseInt( tempStr );    
            arr.push( tempInt );
            arrStr.push( tempStr );
            
            ret = helper( str.substr(i), arr, arrStr );
            
            arr.pop();
            arrStr.pop();
            
            if (ret) {
                break;
            }
        }
        return ret;
    }
    
    
    return helper( num, [], [] );
    
};


/**
"199111992"
"101"
"112358"
"199100199"
"19910199"
"1203"
"1023"
"12"
 */