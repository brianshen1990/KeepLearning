/**

1574. Shortest Subarray to be Removed to Make Array Sorted

Given a binary string s (a string consisting only of '0's and '1's), we can split s Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.

A subarray is a contiguous subsequence of the array.

Return the length of the shortest subarray to remove.

 

Example 1:

Input: arr = [1,2,3,10,4,2,3,5]
Output: 3
Explanation: The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
Another correct solution is to remove the subarray [3,10,4].
Example 2:

Input: arr = [5,4,3,2,1]
Output: 4
Explanation: Since the array is strictly decreasing, we can only keep a single element. Therefore we need to remove a subarray of length 4, either [5,4,3,2] or [4,3,2,1].
Example 3:

Input: arr = [1,2,3]
Output: 0
Explanation: The array is already non-decreasing. We do not need to remove any elements.
Example 4:

Input: arr = [1]
Output: 0
 

Constraints:

1 <= arr.length <= 10^5
0 <= arr[i] <= 10^9

 */


/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    // three situation, beg, end, beg+end
    let longest = Number.MAX_VALUE;
    
    // beg sort
    let begIndex = 1;
    while ( begIndex < arr.length && arr[begIndex] >= arr[begIndex-1] ) begIndex++;
    if ( begIndex >= arr.length ) return 0; // alreay sorted
    longest = Math.min( longest, arr.length - begIndex);
    
    // end sort
    let endIndex = arr.length-2;
    while ( endIndex >= 0 && arr[endIndex] <= arr[endIndex+1] ) endIndex--;
    longest = Math.min( longest, endIndex + 1 );
    
    // keep beg and end
    // console.log("beg",  begIndex, endIndex );
    const begEnd = begIndex;
    begIndex--;
    endIndex++;
    // if ( arr[0] > arr[arr.length-1] ) return longest;
    
    while ( begIndex >= 0 && arr[begIndex] > arr[endIndex] ) {
        begIndex--;
    }
    // console.log("middle",  begIndex, endIndex );
    
    // perfect match to match end, now sliding
    while ( endIndex < arr.length && begIndex < begEnd ) {
        if ( arr[endIndex] >= arr[begIndex] ) {
            begIndex++;
        } else {
            endIndex++;
            begIndex++; // never expand anymore
        }
    }
    // console.log( begIndex, endIndex );
    longest = Math.min( longest, endIndex-begIndex);

    return longest
};

/**
[1,5,10,2,3,10,2]
[1,2,3,10,4,2,3,5]
[5,4,3,2,1]
[1,1,1,1,1,1]
[1,2,3]
[1]

 */