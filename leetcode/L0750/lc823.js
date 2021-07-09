/*
823. Binary Trees With Factors

Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1.

We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children.

Return the number of binary trees we can make. The answer may be too large so return the answer modulo 109 + 7.

 

Example 1:

Input: arr = [2,4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]
Example 2:

Input: arr = [2,4,5,10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].
 

Constraints:

1 <= arr.length <= 1000
2 <= arr[i] <= 109
All the values of arr are unique.
*/


/**
 * @param {number[]} arr
 * @return {number}
 */
 var numFactoredBinaryTrees = function(arr) {
    const cache = {};
    arr.sort( (a,b) => a-b );
    arr.forEach( item => {
        cache[item] = 1;   
    });
    
    let index = 1;
    
    while ( index < arr.length ) {
        for ( let i = 0 ; i < index; i++ ) {
            if ( arr[index] % arr[i] === 0 ) {
                let another = arr[index] / arr[i];
                if ( another in cache ) {
                    cache[arr[index]] += cache[arr[i]] * cache[another];
                }
            }
        }
        index += 1;
    }
    
    // console.log(cache);
    return Object.values(cache).reduce( (acc, ele) => acc + ele, 0 ) % 1000000007;
};


/*

[2,4]
[2,4,5,10]
[2,4,5,10,8,16,32,64,128,256,512,1024,3,6,12,2048,2096]
[2]
*/