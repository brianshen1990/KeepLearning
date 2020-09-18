/**
1011. Capacity To Ship Packages Within D Days

A conveyor belt has packages that must be shipped from one port to another within D days.

The i-th package on the conveyor belt has a weight of weights[i].  Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.

 

Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
Output: 15
Explanation: 
A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed. 
Example 2:

Input: weights = [3,2,2,4,1,4], D = 3
Output: 6
Explanation: 
A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
Example 3:

Input: weights = [1,2,3,1,1], D = 4
Output: 3
Explanation: 
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
 

Constraints:

1 <= D <= weights.length <= 50000
1 <= weights[i] <= 500
 */


/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let small = 1;
    let large = weights.reduce( (cur, prev) => cur+prev, 0 );
    
    const cache = {};
    const helper = ( cap ) => {
        if ( cap in cache ) return cache[cap];
        
        let ret = 0;
        let sum = 0;
        let index = 0;
        while ( index < weights.length ) {
            if ( weights[index] > cap ) {
                cache[cap] = D+1;
                return D + 1; // cap not big enough
            } else if ( sum + weights[index] > cap ) {
                ret++;
                sum = weights[index];
            } else {
                sum += weights[index];   
            }
            index++;
        }
        
        if ( sum > 0 ) ret++;
        cache[cap] = ret;
        return ret;
    }
    
    while ( small + 1 < large ) {
        let middle = Math.floor( ( small + large ) / 2 );
        if ( helper( middle ) <= D ) {
            large = middle;
        } else {
            small = middle + 1;
        }
    }
    if ( helper(small) <= D ) {
        return small;
    }
    return large;
    
};


/**
[1,2,3,4,5,6,7,8,9,10]
5
[3,2,2,4,1,4]
3
[1,2,3,1,1]
4
[1,500]
1
[1,500]
2
[500]
1
 */