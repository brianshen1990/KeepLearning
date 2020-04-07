/*
34. Find First and Last Position of Element in Sorted Array
Medium
1127
62

Given an array of integers nums sorted in ascending order, 
find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Accepted
241,708
Submissions
746,542
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let found = [-1, -1];
    if(nums.length === 0){
        return found;
    }
    if(nums.length === 1){
        if(nums[0] === target){
            return [0, 0];
        }else{
            return found;
        }
    }

    let _helper = function(_nums, _beg, _end, _target){
        let ret = [-1, -1];
        if( _beg === _end ){ // 1
            if( _nums[_beg] === target ){
                ret = [_beg, _beg];
            }
            return ret;
        }else if( _beg+1 === _end ){ // 2
            if(_nums[_beg] === target){
                ret[0] = _beg;
                ret[1] = _beg;
            }
            if(_nums[_end] === target){
                ret[1] = _end;
                if(ret[0] < 0){
                    ret[0] = _end;
                }
            }
            return ret;
        }else{
            if( _nums[_beg] > target ){
                return ret;
            }
            if( _nums[_end] < target ){
                return ret;
            }

            let temp = Math.floor((_beg+_end)/2);
            let temp1 = _helper(_nums, _beg, temp, target);
            if(temp1[0] >=0 ){
                ret[0] = temp1[0];
            }
            if(temp1[1] >=0 ){
                ret[1] = temp1[1];
            }
            let temp2 = _helper(_nums, temp, _end, target);
            if( temp2[0] >=0 ){
                if(ret[0] < 0 ){
                    ret[0] = temp2[0];
                }else{
                    if(ret[0] > temp2[0]){
                        ret[0] = temp2[0];
                    }
                }
            }
            if(temp2[1] >=0){
                if(ret[1] < 0){
                    ret[1] = temp2[1];
                }else{
                    if(ret[1] < temp2[1] ){
                        ret[1] = temp2[1];
                    }
                }
            }
            return ret;
        }

    }
    found = _helper(nums, 0, nums.length, target);
    return found;
    
};
 
const ArrayCompare = require('./helper/ListNode.js').ArrayCompare;

let test = function () {
    console.log( ArrayCompare ( searchRange([5,7,7,8,8,10], 8),  [3,4] ) );
    console.log( ArrayCompare ( searchRange([5,7,7,8,8,10], 10),  [5,5] ) );
    console.log( ArrayCompare ( searchRange([5], 5),  [0,0] ) );
    console.log( ArrayCompare ( searchRange([5,5,5,5,5], 5),  [0,4] ) );
    console.log( ArrayCompare ( searchRange([], 5),  [-1,-1] ) );
    console.log( ArrayCompare ( searchRange([1,2,3,5,6,7,8,9,9,9,9,9,9,9,10], 9),  [7,13] ) );
    console.log( ArrayCompare ( searchRange([5,7,7,8,8,10], 6),  [-1, -1] ) );
}
test();