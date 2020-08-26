/**

1563. Stone Game V

There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array stoneValue.

In each round of the game, Alice divides the row into two non-empty rows (i.e. left row and right row), then Bob calculates the value of each row which is the sum of the values of all the stones in this row. Bob throws away the row which has the maximum value, and Alice's score increases by the value of the remaining row. If the value of the two rows are equal, Bob lets Alice decide which row will be thrown away. The next round starts with the remaining row.

The game ends when there is only one stone remaining. Alice's is initially zero.

Return the maximum score that Alice can obtain.

 

Example 1:

Input: stoneValue = [6,2,3,4,5,5]
Output: 18
Explanation: In the first round, Alice divides the row to [6,2,3], [4,5,5]. The left row has the value 11 and the right row has value 14. Bob throws away the right row and Alice's score is now 11.
In the second round Alice divides the row to [6], [2,3]. This time Bob throws away the left row and Alice's score becomes 16 (11 + 5).
The last round Alice has only one choice to divide the row which is [2], [3]. Bob throws away the right row and Alice's score is now 18 (16 + 2). The game ends because only one stone is remaining in the row.
Example 2:

Input: stoneValue = [7,7,7,7,7,7,7]
Output: 28
Example 3:

Input: stoneValue = [4]
Output: 0
 

Constraints:

1 <= stoneValue.length <= 500
1 <= stoneValue[i] <= 10^6

 */


/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    const cache = {};
    const sumCache = {};
    
    const helper = ( beg, end ) => { // INCLUDE
        if ( end <= beg ) {
            return 0;
        }
        const cacheStr = `${beg}_${end}`;
        if ( cacheStr in cache ) {
            return cache[cacheStr];
        }
        
        if ( end === beg+1 ) {
            cache[cacheStr] = Math.min(stoneValue[beg], stoneValue[end]);
            // console.log( 'RES', beg, end, cache[cacheStr] )
            return cache[cacheStr];
        }
        let ret = 0;
        for ( let i = beg ; i < end ; i++ ) {
            let leftStr = `${beg}_${i}`;
            let rightStr = `${i+1}_${end}`; // included
            
            if ( !( leftStr in sumCache) ) {
                sumCache[leftStr] = stoneValue.slice(beg, i+1).reduce((prev, item) => prev+item);
            }
            let leftSum = sumCache[leftStr];
            if ( !( rightStr in sumCache) ) {
                sumCache[rightStr] = stoneValue.slice(i+1, end+1).reduce((prev, item) => prev+item);
            }
            let rightSum = sumCache[rightStr];
            // console.log(beg, end, i, leftSum, rightSum)
            
            if ( leftSum > rightSum ) {
                ret = Math.max(ret, rightSum + helper(i+1, end));
            } else if ( rightSum > leftSum ) {
                ret = Math.max(ret, leftSum + helper(beg, i));
            } else {
                ret = Math.max(ret, leftSum + helper(beg, i), rightSum + helper(i+1, end));
            }
        }
        cache[cacheStr] = ret;
        // console.log( 'RES', beg, end, cache[cacheStr] )
        return cache[cacheStr];
    }
    
    return helper(0, stoneValue.length-1);
    
};


/**
[6,2,3,4,5,5]
[7,7,7,7,7,7,7]
[4]
[123,12,3,1,123,13,1,31,24,23,4,112,3,12,3,12,312,3,1,312,4,234,23,4,23,421,3,412,312]
 */