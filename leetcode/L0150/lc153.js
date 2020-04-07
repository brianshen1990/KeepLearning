/**
153. Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if ( nums.length === 0 ) {
        return 0;
    }
    if ( nums.length === 1 ) {
        return 1;
    }
    
    let begin = 0;
    let end = nums.length ;
    
    let middle =  Math.floor( (begin + end) / 2 );
    while ( end > begin + 1 ) {
        console.log( `begin ${begin}->${nums[begin]} middle ${middle}->${nums[middle]} end ${end}->${nums[end-1]}` )
        // find the rising one
        if ( nums[middle] > nums[begin] ) {
            // left is the rising one
            if ( nums[end-1] > nums[middle] ) {
                // its a rising one,
                console.log("hit");
                return nums[begin];
            }
            begin = middle;
        } else if (nums[end-1] > nums[middle]) { 
            // right is the rising one
            // left is not
            end = middle+1;
        } else {
            console.log("hit")
            // end <= middle <= begin, no way, same number
            return nums[middle];
        }
        middle =  Math.floor( (begin + end) / 2 );
    }
    let min = nums[middle];
    if ( middle >= 1 &&  nums[middle-1] < min ) {
        min = nums[middle-1];
    }
    if ( middle+1 < end && min > nums[middle+1] ) {
        min = nums[middle+1];
    }
    return min;
};

/**
[1]
[1,2]
[2,1]
[3,1,2]
[1,2,3]
[4,1,2,3]
[1,2,3,4]
[2,3,4,1]
[4,5,1,2,3]
[7,0,1,2,3,4,5,6]
[3,4,5,1,2]
[2,3,4,5,1]
[4,5,6,7,0,1,2]
[0,0,0,0,0,0,0,0]
[0,1,2,0,0,0,0,0]
 */