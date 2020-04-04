/*
33. Search in Rotated Sorted Array
Medium
1697
257


Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Accepted
332,679
Submissions
1,029,914
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let found = -1;
    if(nums.length === 0){
        return found;
    }
    if(nums.length === 1){
        if(nums[0] === target){
            return 0;
        }else{
            return -1;
        }
    }

    let begIndex= 0 ;
    let endIndex = nums.length-1;

    while(begIndex < endIndex){
        // check whether equal
        if(nums[begIndex] === target){
            found = begIndex;
            break;
        }
        if(nums[endIndex] === target){
            found = endIndex;
            break;
        }

        if( begIndex+1 === endIndex ){
            break;
        }

        if( begIndex + 1 < nums.length && nums[begIndex] === nums[begIndex+1] ){
            begIndex++;
            continue;
        }
        if( endIndex - 1 >= 0 && nums[endIndex] === nums[endIndex-1] ){
            endIndex--;
            continue;
        }


        if(nums[endIndex] > nums[begIndex]){
            // 1,2,3 asc
            if( nums[begIndex] > target ){
                break;
            }
            if( nums[endIndex] < target ){
                break;
            }
            let temp = Math.floor(( begIndex + endIndex ) / 2 );
            if( nums[temp] > target ){
                endIndex = temp;
            }else{
                begIndex = temp;
            }

        }else if(nums[endIndex] < nums[begIndex]){
            // 5, 6, 7, 1,2 3,
            let temp = Math.floor( (begIndex + endIndex ) / 2);
            if(nums[temp] === target){
                found = temp;
                break;
            }
            if(nums[begIndex] > target){
                // looking for small one 5,6,1,2,3,4,5
                if( nums[temp] >= nums[begIndex] ){
                    // still in asc
                    begIndex = temp;
                }else{
                    // desc and asc
                    if( nums[temp] > target ){
                        endIndex = temp;
                    }else{
                        begIndex = temp;
                    }
                }
            }else {
                // looking for bigger
                if( nums[temp] <= nums[begIndex] ){
                    // desc and asc
                    endIndex = temp;
                }else{
                    // still in asc
                    if( nums[temp] > target ){
                        endIndex = temp;
                    }else{
                        begIndex = temp;
                    }
                }
            }
        }

    }
    return found;

};
 

let test = function () {
    console.log(search([1,3], 2) === -1);
    console.log(search([1], 1) === 0);
    console.log(search([4,5,6,7,0,1,2], 0) === 4);
    console.log(search([4,5,6,7,0,1,2], 3) === -1);
    console.log(search([4,5,6,7,8,9,10,11,12,13,14,0,1,2], 14) === [4,5,6,7,8,9,10,11,12,13,14,0,1,2].indexOf(14));
    console.log(search([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2) === -1);
}
test();