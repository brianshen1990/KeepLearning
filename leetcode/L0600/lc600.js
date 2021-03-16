/**
 * 
600. Non-negative Integers without Consecutive Ones

Given a positive integer n, find the number of non-negative integers less than or equal to n, whose binary representations do NOT contain consecutive ones.

Example 1:
Input: 5
Output: 5
Explanation: 
Here are the non-negative integers <= 5 with their corresponding binary representations:
0 : 0
1 : 1
2 : 10
3 : 11
4 : 100
5 : 101
Among them, only integer 3 disobeys the rule (two consecutive ones) and the other 5 satisfy the rule. 
Note: 1 <= n <= 109

 */


/**
 * @param {number} num
 * @return {number}
 */
 var findIntegers = function(num) {
    if ( num === 0 ) return 1;
    if ( num === 1 ) return 2;
    const numArr = num.toString(2).split("");
    // 100100100
    let flipped = false;
    for ( let i = 1 ; i < numArr.length ; i++ ) {
        if ( numArr[i-1] === '1' && numArr[i] === '1' ) {
            numArr[i] = '0';
            flipped = true;
        }
        if ( numArr[i-1] === '0' && numArr[i] === '0' && flipped ) {
            numArr[i] = '1';
        }
        
    }
    // console.log( numArr );
    
    let res = 2;
    
    const cache = [{ start0: 1, start1: 1 }];
    for ( let i = 1 ; i < numArr.length-1 ; i++ ) {
        cache[i] = { start0 : cache[i-1].start0 + cache[i-1].start1, start1: cache[i-1].start0  };
        res += cache[i].start1;
    }
    // console.log( res, cache );
    for ( let i = 1 ; i < numArr.length ; i++ ) {
        if ( numArr[i] === '1' ) {
            // console.log( numArr.length - i );
            res += cache[ numArr.length - 1 - i].start0;
        }
    }
    res += 1;
    
    
    
    return res;
    
};



/**
1
2
3
4
5
6
7
8
9
10
11
100
1000
1000000
232432523
1000000000
*/