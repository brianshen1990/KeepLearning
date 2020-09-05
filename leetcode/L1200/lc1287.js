/**

1287. Element Appearing More Than 25% In Sorted Array

Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

Return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
 

Constraints:

1 <= arr.length <= 10^4
0 <= arr[i] <= 10^5
 */


/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    if ( arr.length === 1 ) {
        return arr[0];
    }
    const len = Math.ceil(arr.length / 4);
    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( arr[i+len] === arr[i] ) {
            return arr[i];
        }
    }
};


/**
[1,2,2,6,6,6,6,7,10]
[1,2,2,4,5,8,8,8]
[1]
[1,1]
[1,1,1]
[1,1,1,1]
[1,1,1,2]
 */