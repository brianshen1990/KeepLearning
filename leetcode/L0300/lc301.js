/**
301. Remove Invalid Parentheses

Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]
 */


/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    
    const cacheIsValid = {};
    const helpIsValid = (str) => {
        if ( str in cacheIsValid ) {
            return cacheIsValid[str];
        }
        let count = 0;
        for ( let i = 0 ; i < str.length ; i++ ) {
            if ( str[i] === '(' ) {
                count++;
            } else if ( str[i] === ')' ) {
                count--;
            }
            if ( count < 0 ) {
                break;
            }
        }
        cacheIsValid[str] = (count===0)
        return cacheIsValid[str];
    }
        
    const cache = {};
    const helperRemoveNCheck = (strArr, leftToRemove, rightToRemove) => {
        
        let res = [];
        const str = strArr.join("");
        // console.log( str, leftToRemove, rightToRemove )
        if ( `${str}_${leftToRemove}_${rightToRemove}` in cache ) {
            // console.log("hit");
            return cache[`${str}_${leftToRemove}_${rightToRemove}`];
        }
        if ( leftToRemove === 0 && rightToRemove === 0 ) {
            if ( helpIsValid(str) ) {
                res.push( str );
            }
            return res;
        }
        
        for ( let i = 0 ; i < strArr.length ; i++ ) {
            if ( strArr[i] === '(' && leftToRemove > 0 ) {
                strArr.splice( i, 1 );
                res = res.concat( helperRemoveNCheck( strArr, leftToRemove-1, rightToRemove) );
                strArr.splice( i, 0, "(" );
            } else if ( strArr[i] === ')' && rightToRemove > 0 ) {
                strArr.splice( i, 1 );
                res = res.concat( helperRemoveNCheck( strArr, leftToRemove, rightToRemove-1) );
                strArr.splice( i, 0, ")" );
            }
        }
        cache[ `${str}_${leftToRemove}_${rightToRemove}` ] = [ ... new Set(res) ];
        return cache[ `${str}_${leftToRemove}_${rightToRemove}` ];
    }
    
    let countLeft = s.split("").filter(item => item === "(").length;
    let countRight = s.split("").filter(item => item === ")").length;
    const sArr = s.split("");
        
    let ret = [];
    if ( countLeft > countRight) {
        console.log( s, "remove more left" );
        for ( let i = countLeft-countRight; i <= countLeft; i++ ) {
            ret = helperRemoveNCheck( sArr, i, i-(countLeft-countRight) );
            if ( ret.length > 0 ) { break; }
        }
    } else if ( countRight > countLeft ) {
        console.log( s, "remove more right" );
        for ( let i = countRight-countLeft; i <= countRight; i++ ) {
            ret = helperRemoveNCheck( sArr, i-(countRight-countLeft), i );
            if ( ret.length > 0 ) { break; }
        }
        // ret = helperRemoveNCheck( sArr, 0, countRight-countLeft );
    } else {
        console.log( s, "remove equal" );
        for ( let i = 0 ; i <= countLeft ; i++ ) {
            ret = helperRemoveNCheck( sArr, i, i );
            if ( ret.length > 0 ) { break; }
        }
    }
    return ret;
    
    // return [];
};


/**
"()())()"
"(a)())()"
")("
"()())()))))))))"
 */