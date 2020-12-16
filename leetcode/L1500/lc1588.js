/**

1588. Sum of All Odd Length Subarrays

Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66
 

Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000

 */


/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for ( let i = 1 ; i <= arr.length ; i++ ) {
        if ( i % 2 === 1 ) {
            let tempSum = 0;
            const MAX = Math.min(arr.length+1-i, i);
            // console.log("======", MAX);
            for ( let j = 0 ; j < MAX-1 ; j++ ) {
                tempSum += arr[j] * (j+1);
                // console.log("asc",  j, arr[j], (j+1) );
            }
            for ( let j = MAX-1 ; j < arr.length+1-MAX ; j++ ) {
                tempSum += arr[j] * MAX;
                // console.log("keep", j, arr[j], MAX );
            }
            for ( let j = arr.length+1-MAX ; j < arr.length ; j++ ) {
                tempSum += arr[j] * (arr.length-j);
                // console.log("dsc", j, arr[j], (arr.length-j) );
            }
            // console.log( i, tempSum );
            sum += tempSum;
        }
    }
    
    return sum;
};

/**
[1,4,2,5,3]
[1,2]
[10,11,12]
[1,4,2,5,3,1,4,2,5,3]
[3]
[1,4,2,5,3,1,4,2,5,3,1,4,2,5,3,1,4,2,5,31,4,2,5,3,1,4,2,5,31,4,2,5,3,1,4,2,5,3]
 */