/**

556. Next Greater Element III

Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

 

Example 1:

Input: n = 12
Output: 21
Example 2:

Input: n = 21
Output: -1
 

Constraints:

1 <= n <= 231 - 1
*/

/**
 * @param {number} n
 * @return {number}
 */
 var nextGreaterElement = function(n) {
    // 12345 => 12354
    // 13245 => 13254
    // 13873 => 17338
    // 1123 => 1132
    if ( n < 10 ) return -1;
    const MaxValue = Math.pow( 2, 31 )-1;
    if ( n >= MaxValue ) return -1;
    
    n = n.toString().split("").map(item => parseInt(item));
    
    let found = -1;
    for ( let i = n.length-2; i >= 0; i-- ) {
        for ( let k = i+1; k < n.length ; k++ ) {
           if ( n[i] < n[k] ) {
               found = i;
               break;
           }
        }
        if ( found > 0 ) break;
    }
    if ( found < 0 ) return -1;
    
    let nextMin = Math.min( ...n.slice(found).filter( item => item > n[found] ) );
    
    let swapIndex = n.indexOf(nextMin, found);
    // console.log(found, n[found], swapIndex, nextMin);
    
    n[swapIndex] = n[found];
    n[found] = nextMin;
    // console.log(n);
    
    const res = parseInt([...n.slice(0, found+1), ...n.slice(found+1).sort((a,b)=> a-b)].join(""));
    if ( res > MaxValue ) {
        return -1;
    }
    return res;
    
};

/**
2147483486
230241
1
2
10
12
21
1233243
23542423
2353443
64523
12345
13245
13873
1123
 */