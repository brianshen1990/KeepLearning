/**
81. Search in Rotated Sorted Array II

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if( nums.length === 0 ) {
        return false;
    }
    
    let beg = 0; 
    let end = nums.length-1;
    let middle = 0;
    let found =false;
    while( beg + 1 < end ) {
        middle = Math.floor( ( beg + end ) / 2 );
        // console.log(beg, end, middle );
        if ( nums[middle] === target ) {
            found = true;
            break;
        }
        // not equal
        if ( nums[middle] > nums[beg] ) {
            // console.log("rising left");
            // in rising part
            if ( target > nums[middle] ||  target < nums[beg]  ) {
                // not in left, to right 
                beg = middle + 1;
                // console.log("to right");
            }  else {
                // between, in left
                end = middle - 1;   
                // console.log("stay left");
            }
        } else if( nums[middle] < nums[beg] ) {
            // console.log("rising right");
            // not in rising, then we go right part, 
            // right part is the rising part
            if ( target < nums[middle]  || target > nums[end]  ) {
                // not in right, go left
                end = middle - 1;
                // console.log("to left");
            } else {
                // in right
                beg = middle + 1;
                // console.log("stay right");
            }
        } else {
            // we don't know which part is rising
            // trick one comes
            if ( nums[end] != nums[middle] ) {
                // go to right part
                // console.log("strange, go right");
                beg = middle + 1;
            } else {
                let left = false;
                for ( let i = beg+1 ; i < middle; i++ ) {
                    if ( nums[i] !== nums[beg] ) {
                        // in left
                        left = true;
                        beg = i;
                        end = middle - 1;
                        // console.log("strange, stay left");
                        break;
                    }
                }
                if( ! left ) {
                    beg = middle + 1;
                    // console.log("strange, wow right");
                }
            } 
        }
        
    }
    
    if(! found ) {
        if( nums[beg] === target || nums[end] === target ) {
            found = true;
        }
    }
    return found;
    
};

console.log( search([2,5,6,0,0,1,2], 0) === true );
console.log( search([2,5,6,0,0,1,2], 3) === false );
console.log( search([2,3,4,2,2,2,2,2,2,2,2,2,2,2,2], 3) === true );
console.log( search([2,3,4,2,2,2,2,2,2,2,2,2,2,2,2], 1) === false );
console.log( search([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 2) === true );
console.log( search([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 3) === false );
console.log( search([2], 3) === false );
console.log( search([2], 2) === true );
console.log( search([], 2) === false );

