/**
632. Smallest Range Covering Elements from K Lists

You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.

We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.

 

Example 1:

Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
Output: [20,24]
Explanation: 
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].
Example 2:

Input: nums = [[1,2,3],[1,2,3],[1,2,3]]
Output: [1,1]
Example 3:

Input: nums = [[10,10],[11,11]]
Output: [10,11]
Example 4:

Input: nums = [[10],[11]]
Output: [10,11]
Example 5:

Input: nums = [[1],[2],[3],[4],[5],[6],[7]]
Output: [1,7]
 

Constraints:

nums.length == k
1 <= k <= 3500
1 <= nums[i].length <= 50
-105 <= nums[i][j] <= 105
nums[i] is sorted in non-decreasing order.

 */


/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 var smallestRange = function(nums) {
    // K merge
    // 2 pointers
    if ( nums.length === 1 ) {
        return [ nums[0][0], nums[0][0] ];
    }
    
    let arr = nums[0].map( item => ({ order: 0, value: item }) );
    for ( let i = 1 ; i < nums.length ; i++ ) {
        let indexArr = 0;
        let indexNum = 0;
        let newArr = [];
        while ( indexArr < arr.length && indexNum < nums[i].length ) {
            if ( arr[indexArr].value >= nums[i][indexNum] ) {
                // console.log("gt");
                newArr.push( {order: i, value: nums[i][indexNum] } );
                indexNum++;
            } else {
                // console.log("lt");
                newArr.push( arr[indexArr] ); 
                indexArr++;
            }
        }
        while ( indexArr < arr.length ) {
            newArr.push( arr[indexArr] );
            indexArr++;
        }
        while ( indexNum < nums[i].length ) {
            newArr.push( {order: i, value: nums[i][indexNum] } );
            indexNum++;
        }
        arr = newArr;
    }
    // console.log( arr );
    
    let range = [arr[0].value, arr[arr.length-1].value];
    let start = 0;
    let end = -1;
    let cache = new Array(nums.length).fill(0);
    while ( end < arr.length ) {
        if ( ! cache.every(item => item > 0) ) {
            // console.log("advance end");
            end++;
            if ( end == arr.length ) {
                break;
            }
            cache[ arr[end].order ]++;
        } else {
            // increase start
            let begR = arr[start].value;
            let endR = arr[end].value;
            // console.log("hit", start, arr[start], end, arr[end]);
            while ( cache.every(item => item > 0) ) {
                if ( endR - begR < range[1] - range[0] ) {
                    range = [begR, endR];
                    // console.log(range);
                }
                if ( begR === arr[start].value ) {
                    cache[arr[start].order]--;
                    start++;
                    begR = arr[start].value;
                } else {
                    break;
                }
            }
        }
    }
    return range;
    
};

/**
[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
[[1,2,3],[1,2,3],[1,2,3]]
[[10,10],[11,11]]
[[10],[11]]
[[1],[1],[1],[1]]
[[1],[2],[3],[4],[5],[6],[7]]
[[1,1,1,1],[1,1,1,1]]
[[1,1,1,1]]
[[1,1,1,5]]
[[-5,-4,-3,-2,-1],[1,2,3,4,5]]
[[-2,87,89],[-24,40,72,77,87,91,92,92,92,92,93],[12,16,17,17,17,18],[9,19,20,21,22],[26,40,50,53,54,55],[8,35,37,37,37,38,38,40],[-15,37,37,39],[2,31,34,35,36,36,37,38,38,38,38,39],[10,28,65,72,76,79,79,80]]
[[1,3,5,7,9,10],[2,4,6,8,10]]
[[1,3,5,9,10],[2,4,6,8,10]]
*/