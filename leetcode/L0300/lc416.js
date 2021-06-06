/**
416. Partition Equal Subset Sum

Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:

Each of the array element will not exceed 100.
The array size will not exceed 200.
 

Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    const sum = nums.reduce( (ele, acc) => ele + acc, 0 );
    if ( sum % 2 !== 0 ) return false;
    const target = sum / 2;
    nums.sort( (a,b) => b-a );
    
    const cache = {};
    const helper = (tar, index) => {
        if ( tar === 0 ) return true;
        if ( index === nums.length ) return false;
        
        const str = `${tar}_${index}`;
        if ( str in cache ) return cache[str];
        
        for ( let i = index; i < nums.length ; ) {
            if ( nums[i] > tar ) {
                i++;
                continue;
            }
            
            if ( helper( tar - nums[i], i+1 ) ) {
                cache[str] = true;
                return true;
            }
            // if we cannot find target in [a,a,a,...]
            //    then we won't find it in [a,....]
            i++;
            while ( i > 0 && i < nums.length && nums[i] === nums[i-1] ) {
                i++;
            }
            
        }
        cache[str] = false;
        return false;
    }
        
    return helper( target - nums[0], 1);
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition_DP = function(nums) {
    if ( nums.length === 1 ) return false;
    const sum = nums.reduce( (ele, acc) => ele + acc, 0 );
    if ( sum % 2 !== 0 ) return false;
    const target = sum / 2;
    
    const arr = new Array( target + 1 ).fill(false);
    arr[0] = true;
    
    nums.forEach( num => {
        for ( let i = target-num ; i >=0 ; i-- ) {
            arr[num+i] = arr[num+i] || arr[i];
        }
    })
    
    return arr[target];
};

/** 
[1,5,11,5]
[1,2,3,5]
[1,2,3,3,6,9]
[100,99,100,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1]
[1]
[2]
[4,4,4,4,4,4,4,4,8,8,8,8,8,8,8,8,12,12,12,12,12,12,12,12,16,16,16,16,16,16,16,16,20,20,20,20,20,20,20,20,24,24,24,24,24,24,24,24,28,28,28,28,28,28,28,28,32,32,32,32,32,32,32,32,36,36,36,36,36,36,36,36,40,40,40,40,40,40,40,40,44,44,44,44,44,44,44,44,48,48,48,48,48,48,48,48,52,52,52,52,52,52,52,52,56,56,56,56,56,56,56,56,60,60,60,60,60,60,60,60,64,64,64,64,64,64,64,64,68,68,68,68,68,68,68,68,72,72,72,72,72,72,72,72,76,76,76,76,76,76,76,76,80,80,80,80,80,80,80,80,84,84,84,84,84,84,84,84,88,88,88,88,88,88,88,88,92,92,92,92,92,92,92,92,96,96,96,96,96,96,96,96,97,99]
*/