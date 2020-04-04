/**
93. Restore IP Addresses

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(!s) {
        return [];
    }
    if( s.length < 4 || s.length > 12 ) {
        return [];
    }
    let ret = [];
    
    tryTake123(s, [], ret);
    return ret;
};

var tryTake123 = function(s , stack, ret) {
    var maxLeft = 3 * ( 4 - stack.length );
    var minLeft = 1 * ( 4 - stack.length );
    if( s.length <= maxLeft && s.length >= minLeft) {
        if ( stack.length === 3) {
            if( s.length === 1 ) {
                stack.push(s);
                ret.push( stack.join('.'));
                stack.pop();
            } else  if (s.length === 2 && s[0] !== '0' ) {
                stack.push(s);
                ret.push( stack.join('.'));
                stack.pop();
            } else {
                let tempInt =  parseInt( s );
                if( tempInt <= 255 && tempInt >= 100 ) {
                      stack.push(s);
                    ret.push( stack.join('.'));
                    stack.pop(); 
                }
            }            
        } else {
            // still need to go 
            for ( let i = 1; i <= 3; i++ ) {
                if( i === 1 ) {
                    // take only 1 
                    stack.push( s[0] );
                    tryTake123(s.substr(1), stack, ret);
                    stack.pop();
                    
                } else if ( i === 2 ) {
                    // take 2
                    if ( s[0] === '0' ) {
                        // pass
                    } else {
                        stack.push( s.substr(0, 2));
                        tryTake123(s.substr(2), stack, ret);
                        stack.pop();
                    }
                } else if( i === 3 ) {
                    let tempInt =  parseInt( s.substr(0, 3) );
                    if( tempInt <= 255 && tempInt >= 100 ) {
                        stack.push( s.substr(0, 3) );
                        tryTake123(s.substr(3), stack, ret);
                        stack.pop();
                    }
                }
            }
        }
    } else {
        // length impossible
        return;   
    }
}

/**
"0000"
"2550251135"
"25029255"
"111111111"
"9999999"
"99999999"
 */