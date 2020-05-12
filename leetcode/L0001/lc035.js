/*
35. Search Insert Position
Easy
1005
147


Given a sorted array and a target value, 
return the index if the target is found. If not, return the index where it would be 
if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
Accepted
327,949
Submissions
818,713

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums[0] >= target) {
        return 0;
    }
    if (nums[nums.length-1] < target) {
        return nums.length;
    }

    // in between
    let ret = -1;
    let beg = 0;
    let end = nums.length-1;
    while (beg < end) {
        if (beg+1===end) {
            ret = end;
            break;
        }
        let temp = Math.floor( (beg+end)/2 );
        if ( nums[temp] === target ){
            // found
            while (temp >=0 && nums[temp] === target ){
                temp--;
            }
            ret = temp+1;
            break;
        }
        if (nums[temp] > target) {
            end = temp;
            continue;
        }
        if (nums[temp] < target) {
            beg = temp;
            continue;
        }
    }
    return ret;

};
 
let test = function () {
    console.log(searchInsert([1,3,5,6], 5) === 2);
    console.log(searchInsert([1,3,5,6], 2) === 1);
    console.log(searchInsert([1,3,5,6], 7) === 4);
    console.log(searchInsert([1,3,5,0], 0) === 0);
    console.log(searchInsert([], 5) === 0);
    console.log(searchInsert([1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2], 2) === 8);
    console.log(searchInsert([1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2], 1) === 0);
    
}
test();

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2nd = function(nums, target) {
    let begin = 0;
    let end = nums.length -1;
    let middle = -1;
    
    // recursive 
    // find first >= target
    while( begin + 1 < end ) {
        middle = begin + Math.floor( (end - begin) / 2 );
        
        if ( nums[middle] === target ){
            begin = middle;
            end = middle;
        } else if ( nums[middle] > target ) {
            end = middle;
        } else {
            begin = middle;
        }
    }
    
    // result 
    if ( nums[begin] === target || nums[end] === target ) {
        return nums[begin] === target ? begin : end;
    }
    if ( nums[end] < target ) {
        return end + 1;
    }
    if ( nums[begin] > target ) {
        return begin;
    }
    return end;
    
};

/**
[1,3,5,6]
5
[1,3,5,6]
2
[1,3,5,6]
7
[1,3,5,6]
0
 */