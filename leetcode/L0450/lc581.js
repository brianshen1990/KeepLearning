/**

581. Shortest Unsorted Continuous Subarray

Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

 

Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
 

Follow up: Can you solve it in O(n) time complexity?
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    const stackBeg = [ nums[0] ];
    let index = 1;
    let flagBroken = false;
    while ( index < nums.length ) {
       
       if ( nums[index] >= stackBeg[stackBeg.length-1] && (!flagBroken)  ) {
            stackBeg.push( nums[index] );
        } else {
            flagBroken = true;
            while ( stackBeg.length > 0 && stackBeg[stackBeg.length-1] > nums[index] ) {
                stackBeg.pop();
            }
            
            if ( stackBeg.length === 0 ) {
                break;
            }
        }
        index++;
    }
    
    const stackEnd = [ nums[nums.length-1] ];
    index = nums.length-2;
    flagBroken = false;
    while ( index >= 0 ) {
       
       if ( nums[index] <= stackEnd[stackEnd.length-1] && (!flagBroken)  ) {
            stackEnd.push( nums[index] );
        } else {
            flagBroken = true;
            while ( stackEnd.length > 0 && stackEnd[stackEnd.length-1] < nums[index] ) {
                stackEnd.pop();
            }
            
            if ( stackEnd.length === 0 ) {
                break;
            }
        }
        index--;
    }
    
    // console.log(stackBeg.length, stackEnd.length);
    
    if ( stackBeg.length + stackEnd.length < nums.length ) {
        return nums.length - ( stackBeg.length + stackEnd.length );
    } 
    return 0;
    
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    const newArr = [...nums].sort( (a,b) => a-b );
    let beg = 0;
    while ( beg < nums.length && nums[beg] === newArr[beg] ) {
        beg++;
    }
    
    let end = nums.length-1;
    while ( end >=0 && nums[end] === newArr[end] ) {
        end--;
    }
    
    if ( end <= beg ) {
        return 0;
    }
    
    return nums.length - ( nums.length - 1 - end ) - beg;
    
};


/**
[2,6,4,8,10,9,15]
[2,2,4,8,6, 10,9,15]
[1]
[1,2,3,4]
[4,3,2,1]
 */