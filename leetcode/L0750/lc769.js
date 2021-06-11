/**
769. Max Chunks To Make Sorted

Given an array arr that is a permutation of [0, 1, ..., arr.length - 1], we split the array into some number of "chunks" (partitions), and individually sort each chunk.  After concatenating them, the result equals the sorted array.

What is the most number of chunks we could have made?

Example 1:

Input: arr = [4,3,2,1,0]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.
Example 2:

Input: arr = [1,0,2,3,4]
Output: 4
Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
Note:

arr will have length in range [1, 10].
arr[i] will be a permutation of [0, 1, ..., arr.length - 1].
 */


/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxChunksToSorted = function(arr) {
    let chunks = 0;
    
    let visited = new Array(arr.length).fill(false);
    
    let previous = 0;
    let index = 0;
    while ( index < arr.length ) {
        // console.log(index);
        let max = arr[index];
        visited[max] = true;
        while ( ! visited.slice(previous, max+1).every(item => item) ) {
            // console.log(visited, max )
            index++;
            visited[arr[index]] = true;
            if ( arr[index] > max ) {
                max = arr[index];
            }
        }
        chunks++;
        previous = max;
        index++;
    }
    
    return chunks;
    
};


/*
[4,3,2,1,0]
[1,0,2,3,4]
[1,0,3,2,4]
[1,0,2,4,3]
[1,0,4,3,2]
[0,1,2,3,4,5]
*/