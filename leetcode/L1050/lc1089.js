/**
1089. Duplicate Zeros

Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

 

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]
 

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9

*/


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let endIndex = 0;
    let begIndex = 0;
    while ( endIndex < arr.length ) {
        if ( arr[begIndex] === 0 ) {
            endIndex += 2;
            begIndex += 1;
        } else {
            endIndex++;
            begIndex++;
        }  
    }
    begIndex--;
    
    let endWithOneZero = false;
    if ( endIndex === arr.length + 1 ) {
        endWithOneZero = true;
    } 
    
    // console.log( begIndex );
    
    let reverseIndex = arr.length-1;
    while ( begIndex >= 0 ) {
        if ( arr[begIndex] === 0 ) {
            arr[reverseIndex] = 0;
            if ( !endWithOneZero ) {
                arr[reverseIndex-1] = 0;
                reverseIndex = reverseIndex - 2;
            } else {
                reverseIndex = reverseIndex - 1;
                endWithOneZero = false;
            }
            begIndex--;
        } else {
            arr[reverseIndex--] = arr[begIndex--];
        }
    }
};

/**
[1,0,2,3,0,4,5,0]
[1,2,3]
[1,0,2,3,0,4,5]
[1,0,2,3,0,4]
[0]
[0,1]
[1,0]
[0,1,0,1,0,1]
 */